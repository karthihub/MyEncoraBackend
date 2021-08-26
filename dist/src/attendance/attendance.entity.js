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
exports.AttendanceSchema = exports.Attendance = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Attendance = class Attendance {
};
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Attendance.prototype, "user_name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Attendance.prototype, "user_email", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Attendance.prototype, "client_name", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Attendance.prototype, "working_today", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Attendance.prototype, "session", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Attendance.prototype, "date", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", Boolean)
], Attendance.prototype, "attendance_declaration", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Attendance.prototype, "reason_not_working", void 0);
__decorate([
    mongoose_1.Prop(),
    __metadata("design:type", String)
], Attendance.prototype, "time", void 0);
Attendance = __decorate([
    mongoose_1.Schema()
], Attendance);
exports.Attendance = Attendance;
exports.AttendanceSchema = mongoose_1.SchemaFactory.createForClass(Attendance);
//# sourceMappingURL=attendance.entity.js.map