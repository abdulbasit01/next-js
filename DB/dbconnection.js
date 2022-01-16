import mongoose from "mongoose";
const connect = {}

async function dbConnect() {
    if (connect.isConnected) {
        console.log('mongoose is already connected')
        return
    }
    const connection = await mongoose.connect(process.env.MORNGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    connection.isConnected = db.connections[0].readyState
}

export default dbConnect