import { Schema, model, Document } from 'mongoose';
import { Author } from './author';

export interface Book extends Document {
  name: string;
  author: Author;
}

const BookSchema = new Schema(
  {
    name: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
  },
  {
    timestamps: true,
  },
);

export default model<Book>('Book', BookSchema);
