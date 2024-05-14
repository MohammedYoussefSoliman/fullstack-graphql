import { Schema, model, Document } from 'mongoose';

export interface Author extends Document {
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

export default model<Author>('Author', AuthorSchema);
