import mongoose from "mongoose";

mongoose.connect("mongodb+srv://rishabkanaujia2002:1234@short-url.unjvilu.mongodb.net/foodDb")
const bookingUserDetailSchema = new mongoose.Schema(
  {},{ strict: false }
)

const bookingUserDetail  = mongoose.models.bookingUserDetail  || mongoose.model("bookingUserDetail", bookingUserDetailSchema)

export default bookingUserDetail 