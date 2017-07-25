import { Employee } from './employee';
import { AppStateService } from '../app-status/app-state.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './employees.html'
})
export class EmployeeComponent implements OnInit{
    constructor(private _route: ActivatedRoute, private _appState: AppStateService){ }

    title: string;

    employees: Employee[];

    ngOnInit() {
        this._route.params.subscribe((params: Params) => {
            let roleId = +params['role'];
            this.employees = this._appState.getEmployee(roleId);
            this.title = `Listado de ${this._appState.getRole(roleId).name}`;
        });
    }
}