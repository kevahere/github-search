import { Component, OnInit } from '@angular/core';
import { GitinformationService } from '../gitinformation.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private gitinformationService:GitinformationService) {
        this.gitinformationService.getUserInfo().subscribe(profile=>{
          console.log(profile);
        });
   }

  ngOnInit() {
  }

}
