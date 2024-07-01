import mongoose from "mongoose";

mongoose.connect(process.env.REACT_APP_MONGO_URI)
const bookingUserDetailSchema = new mongoose.Schema(
  {},{ strict: false }
)

const bookingUserDetail  = mongoose.models.bookingUserDetail  || mongoose.model("bookingUserDetail", bookingUserDetailSchema)

export default bookingUserDetail 