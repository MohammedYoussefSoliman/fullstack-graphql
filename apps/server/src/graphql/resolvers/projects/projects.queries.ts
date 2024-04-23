import { projects } from '@constants/sampleData';

export const projectsQueries = {
  projects: () => projects,
  project: (_, args: { id: string }) =>
    projects.find((project) => project.id === args.id),
};
