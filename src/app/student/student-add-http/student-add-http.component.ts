import { Component, OnInit } from '@angular/core';
import { student } from '../student.model';
import { StudentService } from 'src/app/service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add-http',
  templateUrl: './student-add-http.component.html',
  styleUrls: ['./student-add-http.component.css']
})
export class StudentAddHttpComponent implements OnInit {
   
  constructor(private studentService:StudentService,
              private router:Router     ) { }

  ngOnInit(): void {
  }
  addStudent(myForm:any){
    console.log(myForm.value);
    let newStudent:student={
      id:myForm.value.sid,
      studName:myForm.value.studName,
      studDob:myForm.value.studDob,
      studTotalMarks:myForm.value.studTotalMarks,
      studGender:myForm.value.studGender
    }
    this.studentService.addStudent(newStudent).subscribe({
      next:(response)=>{this.router.navigate(['student-list-http']);
    console.log(response)},
    error:(err)=>{console.log(err)}
    })
  }
}
