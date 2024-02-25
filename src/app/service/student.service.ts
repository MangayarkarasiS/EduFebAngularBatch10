import { Injectable } from '@angular/core';
import { student } from '../student/student.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  allStudents:student[]=[];
  baseUrl:string="http://localhost:3000/student";

  constructor(private httpClient:HttpClient) { }

 /* getAllStudents():student[]{
   return this.allStudents;
  }*/

  getAllStudents():Observable<student[]>{
    return this.httpClient.get<student[]>(this.baseUrl);
   }
}
