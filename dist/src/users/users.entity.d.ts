import { Document } from "mongoose";
export declare type UsersDocument = Users & Document;
export declare class Users {
    name: string;
    email: string;
    email_verify: boolean;
    mobile: number;
    mobile_verify: boolean;
    user_status: boolean;
    password: string;
    profile: string;
    specialist: string;
    dob: Date;
    qualification: string;
    degree: string;
    fcm_token: string;
}
export declare const UsersSchema: import("mongoose").Schema<Document<Users, any, any>, import("mongoose").Model<Document<Users, any, any>, any, any>, undefined, {}>;
