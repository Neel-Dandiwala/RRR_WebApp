import { Document } from "mongoose";

export interface UserInfo extends Document {
    userName: string;
    userEmail: string;
    userPassword: string;
    userAge: number;
    userAddress: string;
    userMobile: string;
    userCity: string;
    userState: string;
}