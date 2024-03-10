import { Injectable } from '@angular/core';
import { student } from '../student/student.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  allStudents:student[]=[];
  baseUrl:string="http://localhost:3000/student";

  newHeader: HttpHeaders=new HttpHeaders().set('Authorization','Bearer'+this.authService.fetchToken().token); 

  constructor(private httpClient:HttpClient,private authService:AuthService) { }

 /* getAllStudents():student[]{
   return this.allStudents;
  }*/
 ///get response from http - observable

  getAllStudents():Observable<student[]>{
    return this.httpClient.get<student[]>(this.baseUrl,{headers:this.newHeader});
   }
  getAStudent(studId:number):Observable<student>{
    return this.httpClient.get<student>(this.baseUrl+'/'+studId,{headers:this.newHeader});//http://localhost:3000/student/101
  } 
  addStudent(stud:student):Observable<student>{
    return this.httpClient.post<student>(this.baseUrl,stud,{headers:this.newHeader});
  }
  editStudent(stud:student):Observable<student>{
    return this.httpClient.put<student>(this.baseUrl+'/'+stud.id,stud,{headers:this.newHeader});
  }
  deleteStudent(studId:number):Observable<void>{
    return this.httpClient.delete<void>(this.baseUrl+'/'+studId,{headers:this.newHeader});
  }
}
