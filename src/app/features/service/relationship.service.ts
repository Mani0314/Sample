import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StudentModel } from '../Model/studentModel';
@Injectable({
  providedIn: 'root'
})
export class RelationshipService {

  constructor(private http : HttpClient) { }
  apiUrl = "http://localhost:59092/api/student";
  getAll() : Observable<StudentModel[]>{
    const url =`${this.apiUrl}/getAll`;
    const result = this.http.get<StudentModel[]>(url);
    return result;
  }
  update(add : StudentModel) : Observable<StudentModel>{
    const url =`${this.apiUrl}/update`;
    const result = this.http.post<StudentModel>(url,add);
    return result;
  }
  delete(id : number) : Observable<any>{
    const url = `${this.apiUrl}/delete?id=${id}`
    const result = this.http.get<any>(url);
    return result;
  }
}
