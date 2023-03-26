import mongoose from "mongoose";

const TodoSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model("Todo", TodoSchema)
export default Todo
