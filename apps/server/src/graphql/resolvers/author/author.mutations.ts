import { Client, AddClient } from '@interfaces';
import { clients } from '@constants/sampleData';

export const authorsMutations = {
  createAuthor: (_parent, { input }: { input: AddClient }): Client => {
    const id = String(clients.length + 1);
    const client = { id, ...input };
    clients.push(client);
    return client;
  },
  updateAuthor: (parent, { input }: { input: AddClient }): Client => {
    const { id } = parent;
    const foundClient = clients.find((client) => client.id === id);
    const foundClientIndex = clients.findIndex((client) => client.id === id);
    clients[foundClientIndex] = { ...foundClient, ...input };
    return foundClient;
  },
};