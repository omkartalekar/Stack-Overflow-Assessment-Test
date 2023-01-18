import mongoose from "mongoose";

const questionSchema=new mongoose.Schema({
    id:String,
    // url:String,
    title:Object,
    description:Object,
    popularityCount:{
        type:Number,
        default:0
    }
});

const questions=mongoose.model("question",questionSchema);

export default questions;