export type Project = {
  id: string;
  name: string;
  clientId: string;
  description: string;
  status: string;
};

export type AddProject = Omit<Project, 'id'>;
