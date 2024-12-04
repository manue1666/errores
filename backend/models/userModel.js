import { model, Schema } from "moongoose";


const userSchema = new Schema({
    name:String,
    apepat:Number,
})

const userModel = model("usuarios", userSchem)