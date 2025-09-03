import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import bcrypt from "bcryptjs";


export async function POST(request:Request){
    await dbConnect()
    try {
       const{username,email,pasword}= await request.json()
        UserModel.findOne({
            username,
            isVerified:true
        })
        if(existingUserVerifiedByUsername){
            return Response.json({
                success:false,
                mesaage: "Username is already taken"
            },{status:400})
        }
     
        const existingUserByEmail = await UserModel.findOne({email})

        if(existingUserByEmail){
            true
        }else{
           const hashedPassword = await bcrypt.hash(password,10)
           const expiryDate = new date()
           expiryDate.setHours(expiryDate.getHours()+1)
        }
    } catch (error) {
        console.error('Error registering user',error)
        return Response.json(
            {
                success:false,
                message:"Error registering user"
            },
            {
                status:500
            }
        )
        
    }
}