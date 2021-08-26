import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Attendance, AttendanceDocument } from './attendance.entity';

@Injectable()
export class AttendanceService {
    constructor(
        @InjectModel(Attendance.name) private readonly attendanceModel: Model<AttendanceDocument>
    ){}

    async updateAttendance(options){
        const query = { user_email: options.user_email, date: options.date };
        const update = { $set: options};
        // const options = {};
        return this.attendanceModel.updateOne(query, update, {upsert: true})
        // var user = this.attendanceModel.find(options)
        // if(!user){
        //     return this.attendanceModel.create(options);
        // }else{
        //     console.log(user, options['date']);
            // if(user[0]['date'] == options['date']){
            //     return "You have already submitted attendance for today.";
            // }else{
            //     return this.attendanceModel.create(options);
            // }
            
        // }
    }

    async getAttendanceAll(options){
        return this.attendanceModel.find(options);
    }

    async myAttendance(options){
        return this.attendanceModel.find(options);
    }
}
