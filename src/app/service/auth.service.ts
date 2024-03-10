import { Injectable } from '@angular/core';
import { user } from 'src/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn():boolean{
    return false;
  }

  storeToken(user:user):void{
    sessionStorage.setItem("userInfo",JSON.stringify(user))
  }

  removeToken(){
    sessionStorage.removeItem("userInfo");
  }

  fetchToken(){
    let userInfoString= sessionStorage.getItem("userInfo");
    let userInfo;
    if(userInfoString!=null)
    {
      userInfo=JSON.parse(userInfoString);
    }
    return userInfo;
  }
}
