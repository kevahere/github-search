import { Component } from '@angular/core';
import { GitinformationService } from './gitinformation.service';
import { HttpClient } from '@angular/common/http'
import { UserprofileComponent } from './userprofile/userprofile.component'
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-search';
  avatar: string
  user:User;
    constructor(public gitinformationService:GitinformationService){}


  ngOnInit() { }

}
