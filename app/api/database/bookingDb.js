import mongoose from "mongoose";

mongoose.connect("mongodb+srv://rishabkanaujia2002:1234@short-url.unjvilu.mongodb.net/foodDb")
const bookingSchema = new mongoose.Schema(
  {},{ strict: false }
)

const booking  = mongoose.models.booking  || mongoose.model("booking", bookingSchema)

export default booking 