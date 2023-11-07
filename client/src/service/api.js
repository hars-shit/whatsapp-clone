import axios from 'axios'


const url='http://localhost:8001';
export const addUser=async(data)=>{
    try{
        console.log("data",data)
        // let response=await axios.post(`${url}/add`,data)
        // return response.data
    }
    catch(err){
        console.log("Error while calling the adduser api ",err)
    }
}