import mongoose from "mongoose";

mongoose.connect(process.env.REACT_APP_MONGO_URI)
// console.log(process.env.REACT_APP_MONGO_URI)
const bookingSchema = new mongoose.Schema(
  {},{ strict: false }
)

const booking  = mongoose.models.booking  || mongoose.model("booking", bookingSchema)

export default booking 