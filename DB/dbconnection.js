import mongoose from "mongoose";
const connect = {}

async function dbConnect() {
    if (connect.isConnected) {
        console.log('mongoose is already connected')
        return
    }
    const connection = await mongoose.connect("mongodb+srv://abdulbasit:pass1234@cluster0.ib0wm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    connection.isConnected = connection.connections[0].readyState
}

export default dbConnect