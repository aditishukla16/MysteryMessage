import { Message } from "@/model/User";  

export interface ApiResponse {
  success: boolean;
  message: string;
  isAcceptingMessages?: boolean;
  messages: Message[]; // cleaner shorthand for Array<Message>
}
