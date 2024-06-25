import mongoose from "mongoose";

mongoose.connect("mongodb+srv://rishabkanaujia2002:1234@short-url.unjvilu.mongodb.net/foodDb")
const contactUserSchema = new mongoose.Schema(
  {},{ strict: false }
)

const contactUser  = mongoose.models.contactUser  || mongoose.model("contactUser", contactUserSchema)

export default contactUser 