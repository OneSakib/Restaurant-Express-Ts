import { Schema } from "mongoose";
const restaurantSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  age: {
    required: true,
    type: Number,
  },
});
export default restaurantSchema;
