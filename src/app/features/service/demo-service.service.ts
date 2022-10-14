import { Injectable } from '@angular/core';
import {
  HttpClient,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentEdit } from '../Model/student-edit.model';
@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {
  apiUrl = "http://localhost:59092/api/student";

  constructor(private http: HttpClient) { }

  public getAll(): Observable<StudentEdit[]> {
    debugger;
    const url = `${this.apiUrl}/getAll`;
    const result = this.http.get<StudentEdit[]>(url);
    console.log(result);
    return result;
  }

  public updateStudent(addingStudent: StudentEdit): Observable<StudentEdit> {
    debugger;
    const url = `${this.apiUrl}/update`;
    const result = this.http.post<StudentEdit>(url,addingStudent);
    console.log(result);
    return result;
  }
  public deleteStudent(id : any): Observable<any> {
    const url = `${this.apiUrl}/delete?id=${id}`;
    return this.http.get<any>(url)
  }
}
