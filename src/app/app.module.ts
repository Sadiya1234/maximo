import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MaterialModule } from './shared/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { MyserviceService } from './my-service.service'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    MaterialModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBsLzgT81sjGSFAusI40GvJ328miFM4DGg'
    }),
   
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
