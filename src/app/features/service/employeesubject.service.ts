import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EmployeeModel } from '../Model/employee-Model';
@Injectable({
  providedIn: 'root'
})
export class EmployeesubjectService {
  private empdata : BehaviorSubject<EmployeeModel[]> = new BehaviorSubject<EmployeeModel[]>([]);

  constructor() { }
  getData(){
  return  this.empdata.asObservable();
  }
  setData(data : EmployeeModel[]){
    return this.empdata.next(data);
  }
}
