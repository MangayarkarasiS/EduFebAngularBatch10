import { Component, OnInit } from '@angular/core';
import { student } from '../student.model';
import { StudentService } from 'src/app/service/student.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  filterData:string='';
  allStudents:student[]=[];
 // studentService:StudentService=new StudentService();
  constructor(private studentService:StudentService,private httpClient:HttpClient) {
    
   }

  ngOnInit(): void {
  // this.allStudents= this.studentService.getAllStudents();
  this.studentService.getAllStudents().subscribe({
    next:(response)=>{this.allStudents=response},
    error:(err)=>{console.log(err)}
  })
  }

   

  getMarkColor(TotalMarks:number){
    if(TotalMarks>=90)
    return 'green';
    else if(TotalMarks<=80 && TotalMarks>=60)
    return 'yellow';
    else
    return 'red';

  }
  addStudent(){
    let newStudent:student={
      id:0,
      studName:'Test',
      studTotalMarks:80,
      studDob: new Date(2021,11,12),
      studGender:'Female'
    }
    this.allStudents.push(newStudent);
  }
}
