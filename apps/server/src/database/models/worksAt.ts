import { Schema, model, Document } from 'mongoose';
import { IPublisher } from './publisher';
import { IAuthor } from './author';

export interface WorksAt extends Document {
  author: IAuthor;
  publisher: IPublisher;
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

export default model<WorksAt>('WorksAt', PublisherSchema);
