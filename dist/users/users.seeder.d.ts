import { Model } from "mongoose";
import { Seeder } from "nestjs-seeder";
import { UsersDocument } from "./users.entity";
export declare class UsersSeeder implements Seeder {
    private readonly usersModel;
    constructor(usersModel: Model<UsersDocument>);
    seed(): Promise<any>;
    drop(): Promise<any>;
}
