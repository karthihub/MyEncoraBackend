import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UsersDocument = Users & Document;

@Schema()
export class Users{

    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop({
        default: 0
    })
    email_verify: boolean;

    @Prop()
    mobile: number;

    @Prop({
        default: 0
    })
    mobile_verify: boolean;

    @Prop({
        default: 0
    })
    user_status: boolean;

    @Prop()
    password: string;

    @Prop({
        default: null
    })
    profile: string;

    @Prop({
        default: null
    })
    specialist: string;

    @Prop({
        default: null
    })
    dob: Date;

    @Prop({
        default: null
    })
    qualification: string;

    @Prop({
        default: null
    })
    degree: string;

    @Prop({
        default: null
    })
    fcm_token: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);