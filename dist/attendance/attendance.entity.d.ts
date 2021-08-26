import { Document } from "mongoose";
export declare type AttendanceDocument = Attendance & Document;
export declare class Attendance {
    user_name: string;
    useuser_emailr_name: string;
    client_name: string;
    working_today: string;
    session: string;
    date: string;
    attendance_declaration: boolean;
    reason_not_working: string;
}
export declare const AttendanceSchema: import("mongoose").Schema<Document<Attendance, any, any>, import("mongoose").Model<Document<Attendance, any, any>, any, any>, undefined, {}>;
