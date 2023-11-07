import mongoose from 'mongoose'

const Connection=async()=>{
    const URL=`mongodb+srv://upadhyayharshit05:${process.env.PASSWORD}@cluster0.yr0mys3.mongodb.net/?retryWrites=true&w=majority`
    try{
      await mongoose.connect(URL)
        console.log("Databse connected successfully")
        
         
    }
    catch(err){
        console.log("Error while connecting with database",err.message)

    }
}
export default Connection