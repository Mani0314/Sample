import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../Model/employee-Model';
import { EmployeeService } from '../service/employee.service';
import { Router,ActivatedRoute } from '@angular/router';
import { EmployeesubjectService } from '../service/employeesubject.service';
@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  id : string ='';
  public Employee : EmployeeModel = {
    EmpId: 0,
    EmpName: '',
    Empage: 0,
    Empstatus: '',
    Addres: '',
    Email: '',
    Empsalary: ''
  }
  constructor(private empService : EmployeeService, private router : Router,private empsub : EmployeesubjectService, private routes : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.routes.snapshot.params['id'];
    this.empsub.getData().subscribe(res=>{
      const result = res.find(x=>x.EmpId === parseInt(this.id));
      this.Employee = result as EmployeeModel;
      console.log(res,'list of employees');
    });
  }
  addEmp(){
    //console.log(this.Employee,'Add employee details');
    this.empService.update(this.Employee).subscribe(res=>{
    this.Employee={
    EmpId: 0,
    EmpName: '',
    Empage: 0,
    Empstatus: '',
    Addres: '',
    Email: '',
    Empsalary: ''
    }
    this.router.navigate(['/']);
      //console.log(res, 'checking');
    });
    //alert('save');
  }
}
