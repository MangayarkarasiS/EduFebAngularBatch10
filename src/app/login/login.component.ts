import { Component, OnInit } from '@angular/core';
import { user } from 'src/user.model';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  allUsers:user[]=[];
  errormessage:string='';
  constructor(private  userService:UserService,
               private router:Router,
               private authService:AuthService) { }

  ngOnInit(): void {
  }
  login(myForm:any){
    //i need to take data from myform and store it in variable
    let loginUser: user={
      uname:myForm.value.uname,
      uPassword:myForm.value.uPassword,
      token:''
    }
    //i will go to service and take the data from service, 
    //then we will verify the data 
    //with data stored in variable, if success goto student list page or show an error
     this.userService.fetchAllUsers().subscribe({
      next:(response)=>{
        this.allUsers=response;
        let filterUser:user[]=this.allUsers.filter((eachUser)=>{
          return(eachUser.uname==loginUser.uname && eachUser.uPassword==loginUser.uPassword)
        });
        if(filterUser.length==1)
        {
          filterUser[0].uPassword='';
          this.authService.storeToken(filterUser[0]);
          this.router.navigate(['student-list-http']);
        }
        else{
          this.errormessage="Invalid UserName/Password";
        }
      },
      error:(err)=>{console.log(err)}
     })
  }

}
