import { Schema, model } from 'mongoose';

const userSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: { 
    type: String, 
    unique: true,
    required: true, 
  },
  password: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

const User = model('User', userSchema);
export default User;