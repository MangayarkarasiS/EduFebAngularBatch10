import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from 'src/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string="http://localhost:3000/users";

  constructor(private httpClient:HttpClient) { }

  fetchAllUsers():Observable<user[]>{
    return this.httpClient.get<user[]>(this.baseUrl);
  }
}
