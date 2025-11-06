import Apiresponse from '../utils/Apiresponse.js'
import { Apierror } from '../utils/ApiError.js'
import User from '../models/User'
import asyncHandeler from '../utils/asynchandler.js'


const registerUser = asyncHandeler(async(req,res)=>{

    try {
        const{name,email,password,phoneNumber} = req.body
    
        

        if([email,username,password,phoneNumber].some((field)=>
         field?.trim() === "")
           ){
              throw  new Apierror(400,"All fields are required");
          }

          const existedUser = await User.findOne({email:email});

          if(existedUser){
            throw new Apierror("some use Already exsist with this email");
          }
          

          const user = await User.create({
             name,
             email,
             password,
             phoneNumber
          })

          const createdUser = await User.find({email}).select("-password");


          if(!createdUser){
            throw new Apierror("user is creted successfully there is error in DB");
          }

          return res.status(200).json(
            new Apiresponse(200,createduser,"User register Successfully")
          );

       
    } catch (error) {
        
        throw new Apierror(400,"error while regiering the user");
    }
})

const Login = asyncHandeler(async(req,res)=>{

    const{email,password} = req.body

    if([email,password].some((field)=>
         field?.trim() === "")
           ){
              throw  new Apierror(400,"All fields are required");
    }

    const user = await User.findOne({email});

    if(!user){
        throw new Apierror(401,"Invalid credentials");
    }

    if(user.password !== password){
      throw new Apierror(401,"invalid password");
    }

    return res.status(200,user,"logedin successfully");

})