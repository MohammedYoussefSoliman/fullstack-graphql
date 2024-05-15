import { Publisher, IPublisher } from '@models';

export const publishersMutations = {
  createPublisher: async (_parent, { input }: { input: IPublisher }) => {
    const newPublisher = new Publisher(input);

    return newPublisher.save();
  },
  updatePublisher: async (parent, { input }: { input: IPublisher }) => {
    const { id } = parent;
    const updatedPublisher = Publisher.findByIdAndUpdate(
      id,
      {
        $set: { ...input },
      },
      {
        new: true,
      },
    );
    return updatedPublisher;
  },
};
