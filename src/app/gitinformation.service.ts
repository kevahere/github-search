import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http'
import 'rxjs/add/operator/map';
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class GitinformationService {

  private username:string;
  constructor(private http:Http) {
  console.log("Service is now ready!");
  this.username='kevahere'
 }

 getUserInfo(){
   return this.http.get("baseUrl"+this.username).map(res=>res.json());
 }

}
