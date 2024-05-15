import { authorsMutations, authorsQueries, authorFields } from './author';
import { booksMutations, booksQueries, bookFields } from './book';
import {
  publishersMutations,
  publishersQueries,
  publisherFields,
} from './publisher';

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
  ...authorFields,
  ...bookFields,
  ...publisherFields,
};

export default resolvers;
