import { Author } from '@models';

export const bookFields = {
  Book: {
    author: async (book) => {
      const author = await Author.findById(book.author);
      return author;
    },
  },
};
