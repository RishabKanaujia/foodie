import mongoose from "mongoose";

mongoose.connect(process.env.REACT_APP_MONGO_URI)
const foodSchema = new mongoose.Schema({},{ strict: false })

const food = mongoose.models.food || mongoose.model("food", foodSchema)

export default food