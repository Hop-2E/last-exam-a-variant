import mongoose from 'mongoose';
export const UserSchema = new mongoose.Schema({
  text: {
    type: String,
    maxlength: [20, 'Arail urt'],
  },
  isDone: {
    type: Boolean,
  },
  List: {
    type: Number,
  },
});

const User = mongoose.model('User', UserSchema);

export default User;
