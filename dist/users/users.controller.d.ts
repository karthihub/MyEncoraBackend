/// <reference types="mongoose" />
import { Users } from './users.entity';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
export declare class UsersController {
    private readonly usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    frontend(): Promise<import("./users.entity").UsersDocument>;
    registeration(users: Users): Promise<import("./users.entity").UsersDocument>;
    updateUser(users: Users): Promise<import("mongoose").UpdateWriteOpResult>;
    login(req: any): Promise<{
        access_tocken: string;
        user: import("./users.entity").UsersDocument;
    } | {
        access_tocken: import("./users.entity").UsersDocument;
        user?: undefined;
    }>;
}
