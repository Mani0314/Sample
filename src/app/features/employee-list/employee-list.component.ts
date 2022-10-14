import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../Model/employee-Model';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
import { EmployeesubjectService } from '../service/employeesubject.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
public data : EmployeeModel[] = [];
  constructor( private empService : EmployeeService , private router : Router, private subject : EmployeesubjectService) { }

  ngOnInit(): void {
   this.empService.getAll().subscribe(res=>{
    this.data = res;
    this.subject.setData(this.data);
    console.log(this.data, 'employees')
   });
  }
  onClick(){
    this.router.navigate(['/employee/edit']);
  }
  deleteEmp(id : number){
    this.empService.delete(id).subscribe(res => {

    });
  }

}
