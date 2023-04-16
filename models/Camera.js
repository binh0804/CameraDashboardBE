import mongoose from 'mongoose';

const CameraSchema = new mongoose.Schema({
  serial: {
    type: String,
    required: true,
    unique: true,
  },
  homeId: {
    type: String,
    required: true,
  },
  connection: {
    type: Boolean,
    required: true,
  },
  securityLevel: {
    type: String,
    required: true,
  },
}, { versionKey: false });

const Camera = mongoose.model('Camera', CameraSchema);
export default Camera;
