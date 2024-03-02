import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { student } from '../student.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list-http',
  templateUrl: './student-list-http.component.html',
  styleUrls: ['./student-list-http.component.css']
})
export class StudentListHttpComponent implements OnInit {
  allStudents:student[]=[];
  constructor(private studentService:StudentService,
              private router:Router) { }

  ngOnInit(): void {
    // this.allStudents= this.studentService.getAllStudents();
  this.studentService.getAllStudents().subscribe({
    next:(resp)=>{this.allStudents=resp},
    error:(err)=>{console.log(err)}
  })
  }
  viewStudent(studId:number){
    this.router.navigate(['student-view-http',studId]);
 }

  deleteStudent(studId:number){
     this.router.navigate(['student-delete-http',studId]);
  }
}
