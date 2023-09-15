import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const roomSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  creatorId: {
    type: String,
    required: true,
  },
  participantId:{
    type: String,
  },
  expiration: { type: Date, },
  winner: {
        type: String,
        default: ''
    },
});

export default mongoose.model('Download', roomSchema);