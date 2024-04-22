import { readFileSync } from 'fs';
import { resolve } from 'path';
import { gql } from 'apollo-server-express';

const schema = readFileSync(resolve(__dirname, './schema.graphql'), 'utf8');

export const typeDefs = gql`
  ${schema}
`;
