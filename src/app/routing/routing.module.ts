import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
import { UserprofileComponent } from '../userprofile/userprofile.component';
import { AboutComponent } from '../about/about.component'


const routes: Routes = [
  { path: "user", component: UserprofileComponent },
  { path: "about", component: AboutComponent }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class RoutingModule { }
