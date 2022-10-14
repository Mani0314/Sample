import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StudentModel } from '../Model/studentModel';
@Injectable({
  providedIn: 'root'
})
export class BehaviorSubjectService {
public listofStudents : BehaviorSubject<StudentModel[]> = new BehaviorSubject<StudentModel[]>([]);
  constructor() { }
  getData(){
    return this.listofStudents.asObservable();
  }
  setData(add : StudentModel[]){
    this.listofStudents.next(add)
  }
}
