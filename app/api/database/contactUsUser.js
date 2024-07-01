import mongoose from "mongoose";

mongoose.connect(process.env.REACT_APP_MONGO_URI)
const contactUserSchema = new mongoose.Schema(
  {},{ strict: false }
)

const contactUser  = mongoose.models.contactUser  || mongoose.model("contactUser", contactUserSchema)

export default contactUser 