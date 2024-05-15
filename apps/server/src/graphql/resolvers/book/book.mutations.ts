import { Book, IBook } from '@models';

export const booksMutations = {
  createBook: async (_parent, { input }: { input: IBook }) => {
    const newBook = new Book(input);
    return newBook.save();
  },
  updateBook: async (parent, { input }: { input: IBook }) => {
    const { id } = parent;

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      {
        $set: { ...input },
      },
      {
        new: true,
      },
    );
    return updatedBook;
  },
};
