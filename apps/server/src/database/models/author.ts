import { Schema, model, Document } from 'mongoose';

export interface IAuthor extends Document {
  name: string;
}

const AuthorSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export default model<IAuthor>('Author', AuthorSchema);
