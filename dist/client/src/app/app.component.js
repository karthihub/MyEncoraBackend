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
exports.AppComponent = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const moment = require("moment-timezone");
const XLSX = require("xlsx");
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
let AppComponent = class AppComponent {
    constructor(http) {
        this.http = http;
        this.baseURL = "http://localhost:3000/api/users/getAttendanceAll";
        this.headers = ["User Name", "Email ID", "Client Name", "Working Today", "Session", "Reason for Not Working", "Attendance Declaration", "Date", "Time"];
        this.currentDate = moment().format("DD_MMM_YYYY");
        this.settings = {
            columns: {
                user_name: {
                    title: 'User Name'
                },
                user_email: {
                    title: 'Email ID'
                },
                client_name: {
                    title: 'Client Name'
                },
                working_today: {
                    title: 'Working Today'
                },
                session: {
                    title: 'Session'
                },
                reason_not_working: {
                    title: 'Reason for Not Working'
                },
                attendance_declaration: {
                    title: 'Attendance Declaration'
                }
            }
        };
        this.getAttendance();
    }
    getAttendance() {
        this.http.get(this.baseURL).subscribe(data => {
            this.attendanceData = data;
            console.log(JSON.stringify(data));
        });
    }
    getExactTime(timeStamp) {
        return moment(timeStamp).format('HH:mm:ss a');
    }
    toExportFileName(excelFileName) {
        return `${excelFileName}.xlsx`;
    }
    exportAsExcelFile() {
        const worksheet = XLSX.utils.json_to_sheet(this.attendanceData);
        const workbook = { Sheets: { 'Employees': worksheet }, SheetNames: ['Employees'] };
        XLSX.writeFile(workbook, this.toExportFileName("Encora_Employee_Attendance_" + this.currentDate));
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map