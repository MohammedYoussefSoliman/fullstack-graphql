import { Client, AddClient } from '@interfaces';
import { clients } from '@constants/sampleData';

export const clientResolvers = {
  Query: {
    clients: () => clients,
  },
  Mutation: {
    addClient: (_parent, { input }: { input: AddClient }): Client => {
      const id = String(clients.length + 1);
      const client = { id, ...input };
      clients.push(client);
      return client;
    },
  },
};
