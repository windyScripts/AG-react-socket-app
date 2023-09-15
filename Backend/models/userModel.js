import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  currentlyPlaying:{
    type: Boolean,
    default: true
  }
});

export default mongoose.model('User', userSchema);