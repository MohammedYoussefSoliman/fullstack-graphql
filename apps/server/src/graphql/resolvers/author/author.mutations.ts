import { Author, IAuthor, WorksAt } from '@models';

export const authorsMutations = {
  createAuthor: async (_parent, { input }: { input: IAuthor }) => {
    const newAuthor = new Author(input);
    return newAuthor.save();
  },
  updateAuthor: async (parent, { input }: { input: IAuthor }) => {
    const { id } = parent;

    const updateAuthor = await Author.findByIdAndUpdate(
      id,
      {
        $set: { ...input },
      },
      {
        new: true,
      },
    );
    return updateAuthor;
  },
  addAuthorToPublisher: async (parent, { publisher }) => {
    const { id } = parent;
    const author = await Author.findById(id);

    if (author) {
      const worksAt = new WorksAt({ publisher, author: id });
      await worksAt.save();
    }

    return author;
  },
};
