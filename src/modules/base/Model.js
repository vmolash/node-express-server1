import mongoose from 'mongoose';

const { Schema } = mongoose;

const Model = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
  },
  { timestamps: {} }, // создает created and updated time in DB
);

// userSchema.index({ title: 1 }, { unique: true });

export default mongoose.model('Base', Model);
