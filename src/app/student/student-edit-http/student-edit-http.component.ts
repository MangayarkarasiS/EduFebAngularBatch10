import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
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
    rsName:new FormControl('',[Validators.required,this.onlyText]),
    rsMarks:new FormControl('',Validators.required),
    rsDob:new FormControl('',Validators.required),
    rsGender:new FormControl('',Validators.required)
  });
  constructor(private studentService:StudentService,
              private activatedRoute:ActivatedRoute,
              private router:Router   ) { }
  ngOnInit():void{
    //this.myReactiveForm.valueChanges.subscribe(res=>{console.log(res)});
    this.myReactiveForm.statusChanges.subscribe(res=>{console.log(res)});
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

  addValidator(){
    this.myReactiveForm.get('rsName')?.addValidators(Validators.minLength(2));
    this.myReactiveForm.get('rsName')?.updateValueAndValidity();
  }

  onlyText(control:AbstractControl){
     //it will be checking the input for only charcters and it wont allow numbers
     if(control.value!=null && !/^[A-Za-z\s]*$/.test(control.value)){
        return({invalidText:true})
     }
     return null;
  }

}
