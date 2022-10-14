import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { StudentModel } from '../Model/studentModel';
import { RelationshipService } from '../service/relationship.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
@Output() event = new EventEmitter(); 
@Input() students : StudentModel = {
  StudentId: 0,
  Studentname: '',
  Studentage: 0,
  StudentRollnumber: '',
  JoiningDate: '',
  Email: '',
  Phone: '',
  Address: '',
  CreatedDate: '',
  DeletedDate: '',
  UpdatedDate: ''
}
  constructor(private service : RelationshipService) { }
  
  ngOnInit(): void {
  }
  addStudent(){
    this.service.update(this.students).subscribe(res =>{
      this.students = {
        StudentId: 0,
        Studentname: '',
        Studentage: 0,
        StudentRollnumber: '',
        JoiningDate: '',
        Email: '',
        Phone: '',
        Address: '',
        CreatedDate: '',
        DeletedDate: '',
        UpdatedDate: ''
      }
    })
    this.event.emit();
    console.log(this.students)
  }
}
