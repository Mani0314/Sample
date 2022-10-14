import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../Model/studentModel';
import { BehaviorSubjectService } from '../service/behavior-subject.service';
import { RelationshipService } from '../service/relationship.service';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent implements OnInit {
  datasource : StudentModel[] | undefined 
  constructor(private subject : BehaviorSubjectService, private service : RelationshipService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(res=>{
      this.datasource = res;
      console.log(this.datasource)
    })
  }
  onClick(){
    alert('save')
  }
}
