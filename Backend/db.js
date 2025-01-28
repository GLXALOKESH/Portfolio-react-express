import mongoose from 'mongoose'

const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`)
        console.log(`mongoDB connected!! : ${connectionInstance.connection.host}`)
    }
    catch(error){
        console.log("MongoDB connection faild: ",error)
        process.exit(1)
    }
}

export default connectDB