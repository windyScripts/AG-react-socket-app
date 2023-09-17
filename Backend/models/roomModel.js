import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const roomSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  creatorEmail: {
    type: String,
    required: true,
  },
  participantEmail:{
    type: String,
  },
  expiration: { type: Date, },
  winner: {
        type: String,
        default: ''
    },
});

export default mongoose.model('Download', roomSchema);