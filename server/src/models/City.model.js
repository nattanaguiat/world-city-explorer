import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  name: String,
  country: String,
  population: Number,
  imageUrl: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("City", citySchema);
