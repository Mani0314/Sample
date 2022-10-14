import { Component, OnInit,Input } from '@angular/core';
import { StudentModel } from '../Model/studentModel';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public isClick = true;
  public dataSource : StudentModel = {
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
  constructor() { }

  ngOnInit(): void {
  }
  datatransferCtP(args : any){
    this.dataSource = args;
    this.isClick = false;
    console.log(this.dataSource,'data source')
  }
  forList(){
    this.isClick = true;
  }
  fordelete(){
    this.isClick = true;
  }
}
