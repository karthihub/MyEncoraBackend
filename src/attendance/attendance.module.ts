import { Module } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AttendanceController } from './attendance.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Attendance, AttendanceDocument, AttendanceSchema } from './attendance.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Attendance.name, schema: AttendanceSchema}]),
    PassportModule,
    ],
  providers: [AttendanceService],
  controllers: [AttendanceController]
})
export class AttendanceModule {}
