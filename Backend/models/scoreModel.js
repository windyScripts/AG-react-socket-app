import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  userEmail: {
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
  result: {
    type: Boolean,
    default: false,
  },
  date:{
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model('Score', scoreSchema);