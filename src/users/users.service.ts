import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDocument } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(Users.name) private readonly usersModel: Model<UsersDocument>
    ){}

    async findOne(options){
        return this.usersModel.findOne(options).exec();
    }

    async saveUserDetails(options){
        return this.usersModel.create(options);
    }
    async updateUserDetails(options){
        return this.usersModel.updateOne(options);
    }
}
