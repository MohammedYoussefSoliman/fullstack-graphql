import { Publisher } from '@models';

export const publishersQueries = {
  publishers: async () => {
    const publishers = await Publisher.find();
    return publishers;
  },
  publisher: async (_, args: { id: string }) => {
    const publisher = await Publisher.findById(args.id);
    return publisher;
  },
};
