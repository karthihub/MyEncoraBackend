import { Model } from 'mongoose';
import { UsersDocument } from './users.entity';
export declare class UsersService {
    private readonly usersModel;
    constructor(usersModel: Model<UsersDocument>);
    findOne(options: any): Promise<UsersDocument>;
    saveUserDetails(options: any): Promise<UsersDocument>;
    updateUserDetails(options: any): Promise<import("mongoose").UpdateWriteOpResult>;
}
