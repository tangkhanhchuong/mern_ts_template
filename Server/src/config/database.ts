import mongoose from 'mongoose'

const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_DATABASE } = process.env
// const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.upzro.mongodb.net/${MONGO_DATABASE}?retryWrites=true&w=majority`
const uri = `mongodb://localhost:27017/${MONGO_DATABASE}`

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}

export const connectToMongoDb = async () => {
    const connection = await mongoose.connect(uri, mongooseOptions)
    console.log('Connected to Database')
    return connection
}