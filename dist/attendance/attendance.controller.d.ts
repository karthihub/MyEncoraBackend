import { Attendance } from './attendance.entity';
import { AttendanceService } from './attendance.service';
export declare class AttendanceController {
    attendanceService: AttendanceService;
    constructor(attendanceService: AttendanceService);
    updateAttendance(attendance: Attendance): Promise<import("./attendance.entity").AttendanceDocument>;
    getAttendance(): Promise<import("./attendance.entity").AttendanceDocument[]>;
    root(): {
        message: string;
    };
}
