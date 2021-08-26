import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Date, Document, Number } from "mongoose";
import { Timestamp } from "rxjs";

export type AttendanceDocument = Attendance & Document;

@Schema()
export class Attendance{

    @Prop()
    user_name: string;

    @Prop()
    user_email: string;

    @Prop()
    client_name: string;

    @Prop()
    working_today: string;

    @Prop()
    session: string;

    @Prop()
    date: string;

    @Prop()
    attendance_declaration: boolean;

    @Prop()
    reason_not_working: string;

    @Prop()
    time: string;

}

export const AttendanceSchema = SchemaFactory.createForClass(Attendance);