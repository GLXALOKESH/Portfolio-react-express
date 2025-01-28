import mongoose from "mongoose";


const projectSchema = mongoose.Schema({
    title:{
        type:String,
        required:true

    },
    description:{
        type:String,
        required:true
    },
    git:{
        type:String,
    },
    live:{
        type:String,
    }
})

export const Project = mongoose.model('Project',projectSchema)