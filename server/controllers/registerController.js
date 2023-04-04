const { hashPassword } =require( "../helpers/authHelper")
const  userModels =require( "../models/userModels")
 const registerController=async(req,res)=>{
    try {
        const {name,email,password,phone,address}=req.body;
        if(!name){
            return res.send({error:'Name is required'})
        }
        if(!email){
            return res.send({error:'email is required'})
        }
        if(!password){
            return res.send({error:'paasword is required'})
        }
        if(!phone){
            return res.send({error:'phone is required'})
        }
        if(!address){
            return res.send({error:'address is required'})
        }
        const existingUser=await userModels.findOne({email})
        if(existingUser){
            return res.status(200).send({
                success:true,
                message:"Already user exists",
            })
        }
        const hashedPassword=await hashPassword(password)
        const user=await new userModels({name,email,password:hashedPassword,phone,address}).save()
        res.status(201).send(
            {
                success:true,
                message:"user Registered successfully",
                user
            }
        )
    } catch (error) {
        console.log(error);
    }
}
module.exports={
    registerController
}