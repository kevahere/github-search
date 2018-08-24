import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GitinformationService } from './gitinformation.service';
import { HttpClientModule } from '@angular/common/http';
import { UserprofileComponent } from './userprofile/userprofile.component'

@NgModule({
  declarations: [
    AppComponent,
    UserprofileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GitinformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
