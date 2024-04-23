import { clients } from '@constants/sampleData';

export const clientsQueries = {
  clients: () => clients,
  client: (_, args: { id: string }) =>
    clients.find((client) => client.id === args.id),
};
