export type Client = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

export type AddClient = Omit<Client, 'id'>;
