import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  password: {
    type: String,
    required: true,
    min: 5,
  },
  todos: {
    type: Array,
    default: [],
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
