import { Model } from 'mongoose';
import { AttendanceDocument } from './attendance.entity';
export declare class AttendanceService {
    private readonly attendanceModel;
    constructor(attendanceModel: Model<AttendanceDocument>);
    updateAttendance(options: any): Promise<import("mongoose").UpdateWriteOpResult>;
    getAttendanceAll(options: any): Promise<AttendanceDocument[]>;
    myAttendance(options: any): Promise<AttendanceDocument[]>;
}
