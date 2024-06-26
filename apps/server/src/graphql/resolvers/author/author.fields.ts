import { Publisher, WorksAt } from '@models';

export const authorFields = {
  Author: {
    publishers: async (author) => {
      const worksAt = await WorksAt.find({ author: author.id });
      const publishers = await Publisher.find({
        _id: {
          $in: worksAt.map(({ publisher }) => publisher),
        },
      });
      return publishers;
    },
  },
};
