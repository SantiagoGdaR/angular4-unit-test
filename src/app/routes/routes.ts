import { EmployeeComponent } from './../employee/employee.component';
import { HomeComponent } from './../home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'employee/:role', component: EmployeeComponent }
];