import mongoose from 'mongoose';

const { Schema } = mongoose;

const Model = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    book: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
        required: false,
      },
    ],
  },
  { timestamps: {} }, // создает created and updated time in DB
);

// userSchema.index({ title: 1 }, { unique: true });

export default mongoose.model('Author', Model);
