import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GitinformationService } from './gitinformation.service';
import { HttpClientModule } from '@angular/common/http';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { AboutComponent } from './about/about.component'
import { RouterModule, Routes } from '@angular/router'
import {RoutingModule} from './routing/routing.module'
const routes: Routes = [
  { path: "user", component: UserprofileComponent },
  { path: "about", component: AboutComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    UserprofileComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //NgProgressModule.forRoot(),
    //NgProgressHttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GitinformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
