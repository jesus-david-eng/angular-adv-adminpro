import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { SahredModule } from '../shared/sahred.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
   DashboardComponent,
   ProgressComponent,
   Grafica1Component,
   PagesComponent,
  ],
  imports: [
    CommonModule,
    SahredModule,
    AppRoutingModule
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
  ]
})
export class PagesModule { }
