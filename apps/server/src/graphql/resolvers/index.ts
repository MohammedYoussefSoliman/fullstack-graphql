import { authorsMutations, authorsQueries } from './author';
import { booksMutations, booksQueries } from './book';
import { publishersMutations, publishersQueries } from './publisher';

const resolvers = {
  Query: {
    ...authorsQueries,
    ...booksQueries,
    ...publishersQueries,
  },
  Mutation: {
    ...authorsMutations,
    ...booksMutations,
    ...publishersMutations,
  },
};

export default resolvers;
