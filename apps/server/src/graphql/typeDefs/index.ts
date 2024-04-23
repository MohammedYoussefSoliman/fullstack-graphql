import { readFileSync, readdirSync } from 'fs';
import { resolve, join } from 'path';
import { gql } from 'apollo-server-express';

const graphqlFiles = readdirSync(join(__dirname));

let typeDefsString = '';

graphqlFiles
  .filter((file) => !file.includes('.ts'))
  .forEach((file) => {
    typeDefsString += readFileSync(resolve(__dirname, file), 'utf8');
  });

export const typeDefs = gql`
  ${typeDefsString}
`;
