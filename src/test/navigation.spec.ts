import { routes } from './../app/routes/routes';
import { EmployeeComponent } from './../app/employee/employee.component';
import { HomeComponent } from './../app/home/home.component';
import { AppComponent } from './../app/app.component';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { AppStateServiceMock } from './mocks/app-state.service.mock';
import { AppStateService } from './../app/app-status/app-state.service';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from "@angular/router/testing";
import { fakeAsync } from "@angular/core/testing";
import { tick } from "@angular/core/testing";
import { AlertModule } from 'ngx-bootstrap/alert';
import { FormsModule } from '@angular/forms';
import { Location } from "@angular/common";

describe('Navigation',() => {
    let location: Location;
    let router: Router;
    let fixture;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ 
                AlertModule,
                RouterTestingModule.withRoutes(routes),
                FormsModule 
            ],
            declarations: [ AppComponent, HomeComponent, EmployeeComponent ],
            providers: [
                { provide: AppStateService, useClass: AppStateServiceMock },     
            ]
        });
        router = TestBed.get(Router);
        location = TestBed.get(Location);
        fixture = TestBed.createComponent(AppComponent);
        router.initialNavigation();
    }); 

    it('navigate to "" redirects you to /home', fakeAsync(() => {
        router.navigate(['']).then(() => {            
            expect(location.path()).toBe('/home');
        });
        tick();
    }));

    it('navigate to "employee/3" takes you to employee/3', fakeAsync(() => {
        router.navigate(['/employee/3']).then(() => {   
            expect(location.path()).toBe('/employee/3');
        });
        tick();
    }));
});