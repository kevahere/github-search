import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GitinformationService {
  user:User;
  apiUrl:string = environment.apiUrl

  constructor(private http: HttpClient) {
    this.user= new User
  }

  getUserInfo() {
    interface ApiResponse{
      login:string;
      avatar_url:string;
      url:string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        console.log('response')

        // this.user.login=response.login
        // this.user.avatar_url=response.avatar_url
        // this.user.url=response.url

        resolve()
      },
      error=>{
        this.user.login="Woops something went wrong"
        this.user.avatar_url="something went wrong"
        this.user.url="Page not found"
      }
    )
    })
    return promise
  }

}
