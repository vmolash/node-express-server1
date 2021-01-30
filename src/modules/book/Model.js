import mongoose from 'mongoose';

const { Schema } = mongoose;

const Model = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: {
      type: String,
      required: true,
    },
    author: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
        required: false,
      },
    ],
  },
  { timestamps: {} }, // создает created and updated time in DB
);

// userSchema.index({ title: 1 }, { unique: true });

export default mongoose.model('Book', Model);
