import { HttpClient } from '@angular/common/http';
export declare class AppComponent {
    private http;
    baseURL: string;
    attendanceData: any;
    headers: string[];
    currentDate: string;
    constructor(http: HttpClient);
    settings: {
        columns: {
            user_name: {
                title: string;
            };
            user_email: {
                title: string;
            };
            client_name: {
                title: string;
            };
            working_today: {
                title: string;
            };
            session: {
                title: string;
            };
            reason_not_working: {
                title: string;
            };
            attendance_declaration: {
                title: string;
            };
        };
    };
    getAttendance(): void;
    getExactTime(timeStamp: any): string;
    toExportFileName(excelFileName: string): string;
    exportAsExcelFile(): void;
}
