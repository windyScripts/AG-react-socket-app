import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
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
  currentSocketId:{
    type: String,
    default: '',
  }
});

export default mongoose.model('User', userSchema);