import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';
import { student } from '../student.model';

@Component({
  selector: 'app-student-view-http',
  templateUrl: './student-view-http.component.html',
  styleUrls: ['./student-view-http.component.css']
})
export class StudentViewHttpComponent implements OnInit {


  fetchedStudent:student={
    id:0,
    studName:'',
    studTotalMarks:0,
    studDob: new Date(),
    studGender:''
  }
  constructor(private activatedRoute:ActivatedRoute,
              private studentService:StudentService,
              private router:Router   ) { }

  ngOnInit(): void {
    //1. fetch the studid from routing path
   let studId= this.activatedRoute.snapshot.paramMap.get('sid');
   //with this extracted studid you have to go to service and 
   //subscribe to the service to  get student data
   if(studId!=null){
     this.studentService.getAStudent(+studId).subscribe({
      next:(response)=>{this.fetchedStudent=response},
      error:(err)=>{console.log(err)}
     })
    }
    //diplay the extracted data in html

  }
  back(){
    this.router.navigate(['student-list-http']);
  }

  
}
