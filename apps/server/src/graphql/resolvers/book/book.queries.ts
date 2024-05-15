import { Book } from '@models';

export const booksQueries = {
  books: async () => {
    const books = await Book.find();
    return books;
  },
  book: async (_, args: { id: string }) => {
    const book = await Book.findById(args.id);

    return book;
  },
};
