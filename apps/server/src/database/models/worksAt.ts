import { Schema, model, Document } from 'mongoose';
import { Publisher } from './publisher';
import { Author } from './author';

export interface WorksAt extends Document {
  author: Author;
  publisher: Publisher;
}

const PublisherSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: 'Author', required: true },
    publisher: {
      type: Schema.Types.ObjectId,
      ref: 'Publisher',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default model<WorksAt>('Book', PublisherSchema);
