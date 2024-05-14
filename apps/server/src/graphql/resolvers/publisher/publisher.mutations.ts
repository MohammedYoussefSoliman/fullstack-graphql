import { Project, AddProject } from '@interfaces';
import { projects } from '@constants/sampleData';

export const publishersMutations = {
  createPublisher: (_parent, { input }: { input: AddProject }): Project => {
    const id = String(projects.length + 1);
    const project = { id, ...input };
    projects.push(project);
    return project;
  },
  updatePublisher: (parent, { input }: { input: AddProject }): Project => {
    const { id } = parent;
    const foundClient = projects.find((client) => client.id === id);
    const foundClientIndex = projects.findIndex((client) => client.id === id);
    projects[foundClientIndex] = { ...foundClient, ...input };
    return foundClient;
  },
};
