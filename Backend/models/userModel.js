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
});

export default mongoose.model('Download', roomSchema);