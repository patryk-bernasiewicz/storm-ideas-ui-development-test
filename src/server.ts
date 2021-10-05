import { createServer, Factory, Model, Registry, Request } from 'miragejs';
import faker from 'faker';
import { StatusValue } from 'utils/types';
import { ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';
import randomBetween from 'utils/randomBetween';

const API_URL = process.env.REACT_APP_API_URL || 'localhost';
const NAMESPACE = process.env.REACT_APP_API_NAMESPACE || 'api';

type Story = {
  title: string;
  pages: string[];
  lastModified: Date;
  status: StatusValue;
  liveFrom: Date | undefined;
  ends: Date | undefined;
};

const StoryModel: ModelDefinition<Story> = Model.extend({});

type AppRegistry = Registry<{ story: typeof StoryModel }, any>;
type AppSchema = Schema<AppRegistry>;

let pages = 0;
const createPages = (length: number) => {
  const arr = new Array(length)
    .fill(null)
    .map((_, index) => `http://placekitten.com/100/50?image=${pages + index}`);
  pages += 1;
  return arr;
};

export function makeServer() {
  const server = createServer({
    models: {
      story: Model,
    },

    seeds(server) {
      server.createList('story', 100);
    },

    routes() {
      this.namespace = NAMESPACE;
      this.urlPrefix = API_URL;

      this.get('/stories', (schema: AppSchema, request: Request) => {
        const { queryParams } = request;

        const stories = schema.where('story', (story: any) => {
          const conditions = [];
          if (queryParams.search.length) {
            conditions.push(
              story.title
                .toLowerCase()
                .includes(queryParams.search.toLowerCase())
            );
          }

          const statuses = Array.from(queryParams['filters[status]']).filter(
            (status) => status.length
          );
          if (statuses && statuses.length > 0) {
            conditions.push(statuses.includes(story.status));
          }

          return !conditions.includes(false);
        });

        const sortColumn = queryParams['sorting[column]'] as string;
        const sortDirection = queryParams['sorting[direction]'] as string;

        const sortedStories = queryParams['sorting[column]']
          ? stories.models.sort((storyA: any, storyB: any) => {
              const direction = sortDirection === 'ASC' ? -1 : 1;

              if (!storyA[sortColumn] || !storyB[sortColumn]) {
                return 0;
              }

              if (storyA[sortColumn] && !storyB[sortColumn]) {
                return 1 * direction;
              }

              if (!storyA[sortColumn] && storyB[sortColumn]) {
                return -1 * direction;
              }

              return (
                (storyA[sortColumn] < storyB[sortColumn] ? 1 : -1) * direction
              );
            })
          : stories.models;

        const currentPage = parseInt(queryParams.currentPage) || 1;
        const perPage = parseInt(queryParams.perPage) || 10;

        const start = perPage * (currentPage - 1);
        const end = start + perPage;

        const chunk = sortedStories.slice(start, end);

        return {
          data: chunk,
          meta: {
            currentPage,
            perPage,
            totalPages: Math.ceil(sortedStories.length / perPage),
            totalItems: sortedStories.length,
            displayedItems: chunk.length,
            start: start + 1,
            end,
          },
        };
      });
    },

    factories: {
      story: Factory.extend<Story>({
        title: () => faker.lorem.words(randomBetween(3, 5)),
        pages: () => createPages(randomBetween(2, 7)),
        lastModified: () => faker.date.recent(30),
        liveFrom() {
          return Math.random() > 0.3
            ? faker.date.recent(randomBetween(3, 8))
            : undefined;
        },
        ends() {
          if (!this.liveFrom) {
            return undefined;
          }

          const liveFrom = this.liveFrom as Date;

          if (liveFrom.getTime() >= new Date().getTime()) {
            return faker.date.future(1, liveFrom);
          }

          const endDate =
            Math.random() > 0.3 ? faker.date.future(1) : faker.date.past(2);
          return this.liveFrom
            ? faker.date.between(liveFrom, endDate)
            : undefined;
        },
        status() {
          if (!this.liveFrom) {
            return StatusValue.Draft;
          }

          const liveFrom = this.liveFrom as Date;
          const ends = this.ends as Date;

          if (liveFrom.getTime() > new Date().getTime()) {
            return StatusValue.Scheduled;
          }

          if (ends && ends.getTime() >= new Date().getTime()) {
            return StatusValue.Live;
          }

          return StatusValue.Past;
        },
      }),
    },
  });
  return server;
}
