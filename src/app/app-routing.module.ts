import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { ExpComponent } from './exp/exp.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:"resume",
    component:ResumeComponent
  },
  {path:"home",
    component:HomeComponent
  },
  {
    path:"exp",
    component:ExpComponent
  },
  {
    path:"contact",
    component:ContactComponent
  },
  {
    path:"**",
    redirectTo:"home",
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
