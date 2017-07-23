import { Component } from '@angular/core';
import { Employee } from './employee/employee'
import { Role } from './role/role'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 Unit Testing App';
  roles = [ 
    new Role( 1,'SemiSenior Dev'), 
    new Role( 2,'Senior Dev'), 
    new Role( 3,'Super Senior Dev')
  ];

  model = new Employee(0, '', null);
  
  get diagnostic() { 
    return JSON.stringify(this.model); 
  }
}
