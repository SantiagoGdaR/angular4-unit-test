import { NgForm } from '@angular/forms/src/directives';
import { Employee } from '../employee/employee';
import { Role } from '../role/role';
import { AppStateService } from '../app-status/app-state.service';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'home.html'
})
export class HomeComponent{
  constructor(private _state: AppStateService){ }

  roles: Role[] = this._state.getRoles();
  showSuccessMessage: boolean = false

  model = new Employee(0, '', null);
  
  onSubmit(employeeForm: NgForm) { 
    this._state.addEmployee(Object.assign({}, this.model));
    employeeForm.resetForm();
    this.showSuccessMessage = true;
  }
}