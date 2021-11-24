import mongoose from 'mongoose'

try {
    mongoose.connect('mongodb+srv://leandev:123@cluster0.n37oe.mongodb.net/fileManager?retryWrites=true&w=majority', {
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
