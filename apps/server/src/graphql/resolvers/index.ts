import { clientsMutations, clientsQueries } from './clients';
import { projectsMutations, projectsQueries } from './projects';

const resolvers = {
  Query: {
    ...clientsQueries,
    ...projectsQueries,
  },
  Mutation: {
    ...clientsMutations,
    ...projectsMutations,
  },
};

export default resolvers;
