import { Body, Controller, Get, Post, UseGuards, Request, HttpException, HttpStatus, Render } from '@nestjs/common';
import { Attendance } from './attendance.entity';
import { AttendanceService } from './attendance.service';

@Controller('api/users')
export class AttendanceController {
    constructor(public attendanceService: AttendanceService){}

    @Post('updateAttendance')
    async updateAttendance(@Body() attendance: Attendance){
        return this.attendanceService.updateAttendance(attendance);
    }

    @Get('getAttendanceAll')
    async getAttendanceAll(){
        return this.attendanceService.getAttendanceAll({});
    }

    @Post('myAttendance')
    async myAttendance(@Body() user){
        return this.attendanceService.myAttendance(user);
    }

    @Get()
    @Render('index')
    root() {
        return { message: 'Hello world!' };
    }
}

