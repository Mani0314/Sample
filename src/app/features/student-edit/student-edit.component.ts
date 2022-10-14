import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { StudentEdit } from '../Model/student-edit.model';
import { DemoServiceService } from '../service/demo-service.service';
import { Router , ActivatedRoute} from '@angular/router';
import { StudentSubjectService } from '../service/student-subject.service';
//import {StudentListComponent} from '../student-list/student-list.component'
@Component({
    selector: 'student-edit',
    templateUrl: './student-edit.component.html',
    styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
    id : string = '';
    public students : StudentEdit = {
        StudentId: 0,
        Studentname: '',
        Studentage: 0,
        StudentRollnumber: '',
        JoiningDate: '',
        Email: '',
        Phone: '',
        Address: ''
    };
    public fromGrouping: FormGroup | undefined;
    constructor(private fromBuilder: FormBuilder, private demoservice : DemoServiceService, private router: Router, private subjects : StudentSubjectService, private route :ActivatedRoute ) {
        this.fromGrouping = this.fromBuilder.group({
            studentName: [null],
            studentAge: [null],
            studentRollnumber: [null],
            studentJoiningDate: [null],
            studentEmail: [null],
            studentPhone: [null],
            studentAddress: [null]
        });
    }
    ngOnInit() {
        debugger
        this.id = this.route.snapshot.params['id'];
        this.subjects.getData().subscribe(response => {
         const res = response.find(x=>x.StudentId === parseInt(this.id));
         this.students = res as StudentEdit;
        // console.log(res,'one object value');
          //  console.log(response,'Edit component');  // you will receive the data from sender component here.
          });
          //console.log(this.id,'checking id');
        //   this.demoservice.deleteStudent(parseInt(this.id)).subscribe(res =>{
        //     console.log(res, 'deleteing student');
        //  });
    }
    onClick(){
        // console.log(this.students, 'add student');
        // alert('save');
        debugger
        this.demoservice.updateStudent(this.students).subscribe((res) => {
            this.students = {
                StudentId: 0,
                Studentname: '',
                Studentage: 0,
                StudentRollnumber: '',
                JoiningDate: '',
                Email: '',
                Phone: '',
                Address: ''
            };
            this.router.navigate(['/list']);
           // alert('Data inserted');
        });
    }
}
