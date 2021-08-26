import { Model } from 'mongoose';
import { AttendanceDocument } from './attendance.entity';
export declare class AttendanceService {
    private readonly attendanceModel;
    constructor(attendanceModel: Model<AttendanceDocument>);
    updateAttendance(options: any): Promise<AttendanceDocument>;
    getAttendance(options: any): Promise<AttendanceDocument[]>;
}
