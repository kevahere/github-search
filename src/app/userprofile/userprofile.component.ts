import { Component, OnInit } from '@angular/core';
//import { GitinformationService } from '../gitinformation.service';
import { User } from '../user';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  //providers: [GitinformationService],
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  user: User;
  response: any;
  constructor(/*public gitService: GitinformationService,*/ private http: HttpClient) {


  }


  ngOnInit() {

    interface ApiResponse {
      login: string,
      avatar_url: string,
      url: string
    }
    this.http.get<ApiResponse>("https://api.github.com/users/kevahere?").subscribe(data =>{
        this.user = new User(data.login,data.avatar_url,data.url)
    })




  }

}
