import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AttendanceModule } from './attendance/attendance.module';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://krish1991:karthi198pappu@cluster0.gtjqf.mongodb.net/solution", {
    autoCreate: true
    }),
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: 'development.env',
      isGlobal: true,
    }),
    AttendanceModule
],
  controllers: [],
  providers: [],
})
export class AppModule {}
