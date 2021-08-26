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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersSchema = exports.Users = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Users = class Users {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Users.prototype, "name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    mongoose_1.Prop({
        default: 0
    }),
    __metadata("design:type", Boolean)
], Users.prototype, "email_verify", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Number)
], Users.prototype, "mobile", void 0);
__decorate([
    mongoose_1.Prop({
        default: 0
    }),
    __metadata("design:type", Boolean)
], Users.prototype, "mobile_verify", void 0);
__decorate([
    mongoose_1.Prop({
        default: 0
    }),
    __metadata("design:type", Boolean)
], Users.prototype, "user_status", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    mongoose_1.Prop({
        default: null
    }),
    __metadata("design:type", String)
], Users.prototype, "profile", void 0);
__decorate([
    mongoose_1.Prop({
        default: null
    }),
    __metadata("design:type", String)
], Users.prototype, "specialist", void 0);
__decorate([
    mongoose_1.Prop({
        default: null
    }),
    __metadata("design:type", Date)
], Users.prototype, "dob", void 0);
__decorate([
    mongoose_1.Prop({
        default: null
    }),
    __metadata("design:type", String)
], Users.prototype, "qualification", void 0);
__decorate([
    mongoose_1.Prop({
        default: null
    }),
    __metadata("design:type", String)
], Users.prototype, "degree", void 0);
__decorate([
    mongoose_1.Prop({
        default: null
    }),
    __metadata("design:type", String)
], Users.prototype, "fcm_token", void 0);
Users = __decorate([
    mongoose_1.Schema()
], Users);
exports.Users = Users;
exports.UsersSchema = mongoose_1.SchemaFactory.createForClass(Users);
//# sourceMappingURL=users.entity.js.map