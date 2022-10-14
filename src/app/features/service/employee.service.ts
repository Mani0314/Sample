import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../Model/employee-Model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }
  apiUrl = "http://localhost:59092/api/employee";
  getAll(): Observable<EmployeeModel[]>{
    const url = `${this.apiUrl}/getall`;
    const result = this.http.get<EmployeeModel[]>(url);
    return result;
  }
  update(add : EmployeeModel) : Observable<EmployeeModel>{
    debugger
    const url = `${this.apiUrl}/update`
    const result = this.http.post<EmployeeModel>(url, add);
    return result;
  }
  delete(id : number) : Observable<any>{
    const url = `${this.apiUrl}/delete?id=${id}`
    const result = this.http.get<any>(url);
    return result;
  }
}
