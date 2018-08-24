import { Component, OnInit } from '@angular/core';
import { GitinformationService } from '../gitinformation.service';
import { User } from '../user';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  providers:[GitinformationService],
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

user:User;
  constructor(public gitService:GitinformationService){


  }


  ngOnInit() {
    this.gitService.getUserInfo(this.user)
    this.user = this.gitService.getUserInfo(this.user)

  }

}
