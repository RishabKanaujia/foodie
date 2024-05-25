import mongoose from "mongoose";

mongoose.connect("mongodb+srv://rishabkanaujia2002:1234@short-url.unjvilu.mongodb.net/foodDb")
const foodSchema = new mongoose.Schema({},{ strict: false })

const food = mongoose.models.food || mongoose.model("food", foodSchema)

export default food