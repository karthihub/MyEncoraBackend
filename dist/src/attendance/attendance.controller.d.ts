/// <reference types="mongoose" />
import { Attendance } from './attendance.entity';
import { AttendanceService } from './attendance.service';
export declare class AttendanceController {
    attendanceService: AttendanceService;
    constructor(attendanceService: AttendanceService);
    updateAttendance(attendance: Attendance): Promise<import("mongoose").UpdateWriteOpResult>;
    getAttendanceAll(): Promise<import("./attendance.entity").AttendanceDocument[]>;
    myAttendance(user: any): Promise<import("./attendance.entity").AttendanceDocument[]>;
    root(): {
        message: string;
    };
}
