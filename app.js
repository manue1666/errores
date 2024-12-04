
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { test } from "./backend/controllers/userController.js";


dotenv.config();
mongoose.connect(process.env.urlbd)
.then(()=>{
    console.log(" si jala la base")
})
.catch(()=>{
    console.log("fallo al conectar",)
})

const app=express();
app.use(cors());
app.listen(4001, ()=>{
    console.log("jala el servidor")
})
