import { Author } from '@models';

export const authorsQueries = {
  authors: async () => {
    const authors = await Author.find();
    return authors;
  },
  author: async (_, args: { id: string }) => {
    const author = await Author.findById(args.id);
    return author;
  },
};
