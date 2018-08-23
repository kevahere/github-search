import { Component } from '@angular/core';
import { GitinformationService } from './gitinformation.service';
import { HttpClient } from '@angular/common/http'
import { UserprofileComponent } from './userprofile/userprofile.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-search';
  user$
  avatar:string

  ngOnInit(){
    this.http.get('https://api.github.com/users/kevahere?access_token=5958638cfdabfbc18f5cf9e2ad3d54252b367f67').subscribe(
      data=>{
        // console.log(data)
        this.user$ = data;
        console.log(this.user$.avatar_url)
        this.avatar = this.user$.avatar_url;
      }
    )
  }

  constructor(private git:GitinformationService, private http:HttpClient){

  }
}
