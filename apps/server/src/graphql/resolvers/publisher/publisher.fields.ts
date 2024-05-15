import { Author, WorksAt } from '@models';

export const publisherFields = {
  Publisher: {
    authors: async (publisher) => {
      const worksAt = await WorksAt.find({ author: publisher.id });
      const authors = await Author.find({
        _id: { $in: worksAt.map(({ author }) => author) },
      });
      return authors;
    },
  },
};
