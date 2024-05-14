import { Schema, model, Document } from 'mongoose';
import { IAuthor } from './author';

export interface IBook extends Document {
  name: string;
  author: IAuthor;
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

export default model<IBook>('Book', BookSchema);
