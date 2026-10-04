import mongoose from 'mongoose'

const connectDB = async ()=>{
    const con = await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB Connected "+con.connection.host);
}

export default connectDB;