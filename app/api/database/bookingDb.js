import mongoose from "mongoose";

mongoose.connect("mongodb+srv://rishabkanaujia2002:1234@short-url.unjvilu.mongodb.net/foodDb")
const bookingSchema = new mongoose.Schema(
  // {
  //   date: { type: String, required: true },
  //   time: { type: String, required: true },
  //   partySize: { type: Number, required: true },
  // }
  {},{ strict: false }
)

const booking  = mongoose.models.booking  || mongoose.model("booking", bookingSchema)

export default booking 