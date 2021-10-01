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
        const page = parseInt(queryParams.page) || 1;
        const perPage = parseInt(queryParams.perPage) || 10;

        const start = perPage * (page - 1);
        const end = start + perPage;

        const stories = schema.all('story');

        return {
          data: stories.models.slice(start, end),
          meta: {
            page,
            perPage,
            totalPages: Math.ceil(stories.models.length / perPage),
          },
        };
      });
    },

    factories: {
      story: Factory.extend<Story>({
        title: () => faker.lorem.words(randomBetween(4, 8)),
        pages: () => createPages(randomBetween(2, 7)),
        lastModified: () => faker.date.recent(30),
        status: () =>
          faker.random.arrayElement([
            StatusValue.Draft,
            StatusValue.Live,
            StatusValue.Past,
            StatusValue.Scheduled,
          ]),
        liveFrom: () =>
          Math.round(Math.random()) > 0.8 ? faker.date.recent(5) : undefined,
        ends: () =>
          Math.round(Math.random()) > 0.8 ? faker.date.recent(5) : undefined,
      }),
    },
  });
  return server;
}
