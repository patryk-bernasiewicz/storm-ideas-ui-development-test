import { createServer, Factory, Model, Registry, Request } from 'miragejs';
import faker from 'faker';
import { StatusValue } from 'utils/types';
import { ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';
import randomBetween from 'utils/randomBetween';

type Story = {
  title: string;
  pages: string[];
  lastModified: Date;
  status: StatusValue;
  liveFrom: Date;
  ends: Date;
};

const StoryModel: ModelDefinition<Story> = Model.extend({});

type AppRegistry = Registry<{ story: typeof StoryModel }, any>;
type AppSchema = Schema<AppRegistry>;

export function makeServer() {
  const server = createServer({
    models: {
      story: Model,
    },

    seeds(server) {
      server.createList('story', 100);
    },

    routes() {
      this.namespace = 'api';
      this.urlPrefix = 'https://my.api.com';

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
        title: faker.lorem.words(randomBetween(4, 8)),
        pages: new Array(randomBetween(1, 3))
          .fill(null)
          .map((_, index) => `http://placekitten.com/200/300?i=${index}`),
        lastModified: faker.date.recent(30),
        status: faker.random.arrayElement([
          StatusValue.Draft,
          StatusValue.Live,
          StatusValue.Past,
          StatusValue.Scheduled,
        ]),
        liveFrom: faker.date.recent(5),
        ends: faker.date.future(1),
      }),
    },
  });
  return server;
}
