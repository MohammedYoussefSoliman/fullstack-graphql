import { Schema, model, Document } from 'mongoose';

export interface IPublisher extends Document {
  name: string;
}

const PublisherSchema = new Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export default model<IPublisher>('Publisher', PublisherSchema);
