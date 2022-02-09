import mongoose from 'mongoose'

try {
    mongoose.connect(process.env.MONGODB_CONNECTION, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    
    const connection = mongoose.connection;
    
    connection.once('open', ()=>{
        console.log('Database is Connected!');
    })
} catch (error) {
    console.log(error)
}
