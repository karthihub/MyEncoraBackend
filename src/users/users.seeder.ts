import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Seeder, DataFactory } from "nestjs-seeder"
import { Users, UsersDocument } from "./users.entity";

export class UsersSeeder implements Seeder{

    constructor(
        @InjectModel(Users.name) private readonly usersModel: Model<UsersDocument>
    ){}
    
    seed(): Promise<any> {
        // throw new Error("Method not implemented.");
        return this.usersModel.deleteMany({}) as any;
    }
    drop(): Promise<any> {
        // throw new Error("Method not implemented.");
        const User: any = DataFactory.createForClass(Users).generate(50);
        return this.usersModel.insertMany(Users);
    }

}