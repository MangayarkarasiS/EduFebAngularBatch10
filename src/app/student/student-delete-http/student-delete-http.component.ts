import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-delete-http',
  templateUrl: './student-delete-http.component.html',
  styleUrls: ['./student-delete-http.component.css']
})
export class StudentDeleteHttpComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
              private studentService:StudentService,
              private router:Router) { }

  ngOnInit(): void {
    let studID=this.activatedRoute.snapshot.paramMap.get('sid');
    if(studID!=null){
    this.studentService.deleteStudent(+studID).subscribe({
      next:(response)=>{console.log("Student deleted successfully")},
      error:(err)=>{console.log("Errror")}

    })
  }
  }
  back(){
    this.router.navigate(['student-list-http']);

  }
}
