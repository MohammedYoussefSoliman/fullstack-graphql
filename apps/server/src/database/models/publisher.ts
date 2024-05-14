import { Schema, model, Document } from 'mongoose';

export interface Publisher extends Document {
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

export default model<Publisher>('Book', PublisherSchema);
