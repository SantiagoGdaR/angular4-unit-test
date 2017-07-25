import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AppComponent } from './app.component';

import { AppStateService } from './app-status/app-state.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'employee/:role', component: EmployeeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AlertModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [
    AppStateService   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
