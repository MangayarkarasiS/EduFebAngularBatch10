import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';
import { student } from '../student.model';

@Component({
  selector: 'app-student-edit-http',
  templateUrl: './student-edit-http.component.html',
  styleUrls: ['./student-edit-http.component.css']
})
export class StudentEditHttpComponent implements OnInit {
  fetchedStudent :student={
    id:0,
    studName:'',
    studTotalMarks:0,
    studDob:new Date(),
    studGender:''
    }
  myReactiveForm:FormGroup=new FormGroup({
    rsId:new FormControl(),
    rsName:new FormControl(),
    rsMarks:new FormControl(),
    rsDob:new FormControl(),
    rsGender:new FormControl()
  });
  constructor(private studentService:StudentService,
              private activatedRoute:ActivatedRoute,
              private router:Router   ) { }
  ngOnInit():void{
    let studId=this.activatedRoute.snapshot.paramMap.get('sid');
    if(studId!=null)
    this.studentService.getAStudent(+studId).subscribe({
      next:(response)=>{
        this.fetchedStudent=response;
        console.log(this.fetchedStudent.studGender);
        this.myReactiveForm.setValue({
          rsId:this.fetchedStudent.id,
          rsName:this.fetchedStudent.studName,
          rsDob:this.fetchedStudent.studDob,
          rsMarks:this.fetchedStudent.studTotalMarks,
          rsGender:this.fetchedStudent.studGender
        })
      },
      error:(err)=>console.log(err)
 })  
}
  editStudent(){
    console.log(this.myReactiveForm);
    let updatStudent:student={
     id:this.myReactiveForm.value.rsId,
     studName:this.myReactiveForm.value.rsName,
     studTotalMarks:this.myReactiveForm.value.rsMarks,
     studDob:this.myReactiveForm.value.rsDob,
     studGender:this.myReactiveForm.value.rsGender
   }
 //send this student object to backend through the service to get added to databse
   this.studentService.editStudent(updatStudent).subscribe({
     next:(response)=>{this.router.navigate(['student-list-http']),console.log(response)},
     error:(err)=>{console.log(err)}
     
   })
  }

  

}
