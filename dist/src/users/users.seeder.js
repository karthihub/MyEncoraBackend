"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSeeder = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const nestjs_seeder_1 = require("nestjs-seeder");
const users_entity_1 = require("./users.entity");
let UsersSeeder = class UsersSeeder {
    constructor(usersModel) {
        this.usersModel = usersModel;
    }
    seed() {
        return this.usersModel.deleteMany({});
    }
    drop() {
        const User = nestjs_seeder_1.DataFactory.createForClass(users_entity_1.Users).generate(50);
        return this.usersModel.insertMany(users_entity_1.Users);
    }
};
UsersSeeder = __decorate([
    __param(0, mongoose_1.InjectModel(users_entity_1.Users.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersSeeder);
exports.UsersSeeder = UsersSeeder;
//# sourceMappingURL=users.seeder.js.map