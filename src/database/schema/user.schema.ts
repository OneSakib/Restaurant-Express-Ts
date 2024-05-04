import { Schema } from "mongoose";
const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  age: {
    required: true,
    type: Number,
  },
});
export default userSchema;
