import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { StudentModel } from '../Model/studentModel';
import { RelationshipService } from '../service/relationship.service';
@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
data : StudentModel[] = [];
@Output() datasource = new EventEmitter<StudentModel>();
@Output() del = new EventEmitter();
  constructor(private router : Router, private service : RelationshipService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.service.getAll().subscribe(res =>{
      this.data = res;
      console.log(this.data, 'getall students');
    })
  }
  onClick(){
    this.router.navigate(['/child/edit']);
  }
  editStudent(edit : StudentModel){
    //alert('edit Mode');
    this.datasource.emit(edit);
    console.log(edit,'edit mode')
  }
  delete(id : number){{
    this.service.delete(id).subscribe(res=>{
    });
 this.getAll();
  }}
}
