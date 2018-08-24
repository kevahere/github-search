import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { User } from './user';
import { Repository } from './repository'

@Injectable({
  providedIn: 'root'
})


export class GitinformationService {
  key: string = environment.accessToken
  user: User
  apiUrl: string = environment.apiUrl
  repo$


  constructor(private http: HttpClient) {
    this.user = new User(
      "login", "avatar_url", "url"
    )
  }


  getUserInfo(user) {
    interface ApiResponse {
      login: string;
      avatar_url: any;
      url: string;
    }


    let promise = new Promise(
      (resolve, reject) => {
        this.http.get<ApiResponse>("https://api.github.com/users/kevahere?access_token=5958638cfdabfbc18f5cf9e2ad3d54252b367f67").toPromise().then(response => {
          this.user.login = response.login;
          this.user.avatar_url = response.avatar_url;
          this.user.url = response.url;
          console.log('dum')
          console.log(response);
          resolve();

        },
          error => {
            this.user.login = "Woops something went wrong"
            this.user.avatar_url = "something went wrong"
            this.user.url = "Page not found"
          }
        )
      })
    return promise
  }

}
