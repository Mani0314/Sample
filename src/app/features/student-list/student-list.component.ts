import { Component, OnInit } from '@angular/core';
import { StudentEdit } from '../Model/student-edit.model';
import { DemoServiceService } from '../service/demo-service.service';
import { Router } from '@angular/router';
import { StudentSubjectService } from '../service/student-subject.service';

@Component({
    selector: 'student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
    public dataSource: StudentEdit[] = [];
    constructor(private demoService : DemoServiceService , private router: Router, private sub : StudentSubjectService) {
    }
    id : number = 0;
    ngOnInit(): void {
        this.getAll();
      // this.sub.sendData(this.dataSource);
    }
    getAll(){
        this.demoService.getAll().subscribe((res) => {
            this.dataSource = res;
            this.sub.sendData(this.dataSource);
            //console.log(res, 'after sub')
        });
    }
    addStudent(){
        // alert('Add');
        this.router.navigate(['/edit']);
    }
    delete(id : number){
        //console.log(id,'checking id');
        //alert('deleteing');
        let text;
        if (confirm("Are you want to delete this?") == true) {
            this.demoService.deleteStudent(id).subscribe(res =>{
                this.getAll();
            });
          } else {
            text = "You canceled!";
          }
        // console.log(res, 'deleteing student');
       // const dele = this.dataSource.find(x=>x.StudentId == id);

    }
}

