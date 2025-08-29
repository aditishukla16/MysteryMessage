import {resend} from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email: string,
    username:string,
    verifyCode: string
):<ApiResponse>{
    try {
        return{success: true,message:'Verification email send successfully'}
        
    } catch (emailError) {
        console.error("Error sending verification email",emailError)
        return{success:false,messafe:"Failed to send verfication email"}
    }
}
    
