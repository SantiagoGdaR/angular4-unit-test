import { NextObserver } from 'rxjs/Observer';
import { Role } from '../role/role';
import { Employee } from '../employee/employee';
import { Injectable } from '@angular/core';

@Injectable()
export class AppStateService{
    roles: Role[] = new Array(
        new Role(1, 'Backend Dev'),
        new Role(2, 'Database dev'),
        new Role(3, 'Fontend dev')
    );   
    employees: Employee[] = new Array(
        new Employee(1, 'Tato', this.roles[0]),
        new Employee(2, 'Nico', this.roles[2]),
        new Employee(3, 'Gabi', this.roles[1]),
        new Employee(4, 'Mica', this.roles[1])
    );
    
    next: number = 5; 

    getRoles(): Role[]{
        return this.roles;
    }
    
    getRole(roleId: number): Role{
        return this.roles.filter((role) => role.id === roleId)[0];
    }

    getEmployee(roleId: number): Employee[]{
        return this.employees.filter((employee) => employee.role.id === roleId);
    }

    addEmployee(employee: Employee): void{
        employee.id = this.next;
        this.next++;
        this.employees.push(employee);
    }
}