import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  roomId: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

export default mongoose.model('Download', roomSchema);