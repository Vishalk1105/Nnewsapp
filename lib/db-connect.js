import mongoose from "mongoose";

global.mongoose = {
    conn: null,
    Promise: null
}

export async function dbConnect() {
    if (global.mongoose && global.mongoose.conn) {
console.log('Using Existing Mongoose Connection ')
        return global.mongoose.conn;
    } else {
        console.log('Creating New Mongoose Connection')
        const user = process.env.MONGODB_USER
        const password = process.env.MONGODB_PASSWORD
        const database = process.env.MONGODB_DATABASE

        const conString = `mongodb+srv://newsx-user:${password}@cluster0.znm9ek5.mongodb.net/?retryWrites=true&w=majority`
        // const conString = `mongodb+srv://${user}:${password}@cluster0.8pl1w.mongodb.net/${database}?retryWrites=true&w=majority`;

        const promise = mongoose.connect(conString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: true
        }).then(mongoose=>mongoose)
        
        global.mongoose={
            conn: await promise,
            promise
        }
        return await promise
    }
}