import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StudentEdit } from '../Model/student-edit.model';

@Injectable({
  providedIn: 'root'
})
export class StudentSubjectService {
  private dataSource: BehaviorSubject<StudentEdit[]> = new BehaviorSubject<StudentEdit[]>([]);
  //data: Observable<StudentEdit> = this.dataSource.asObservable();
 
  constructor() { }

  getData(){
    return this.dataSource.asObservable();
  }
 
  sendData(data: StudentEdit[]) {
    this.dataSource.next(data);
  }
}
