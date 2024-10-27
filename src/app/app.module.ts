import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent } from './nav/nav.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { HttpClient } from '@angular/common/http';
import { ExpComponent } from './exp/exp.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ResumeComponent,
    HomeComponent,
    ExpComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxDocViewerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
