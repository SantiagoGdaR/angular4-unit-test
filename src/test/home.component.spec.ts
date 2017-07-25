import { FormsModule } from '@angular/forms';
import { AppStateService } from '../app/app-status/app-state.service';
import { AppStateServiceMock } from './mocks/app-state.service.mock';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HomeComponent } from '../app/home/home.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertModule } from 'ngx-bootstrap/alert';

describe('Home Component', () => {  
    let comp: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let de:  DebugElement;
    let el: HTMLElement;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                AlertModule, 
                FormsModule
            ],
            declarations: [ HomeComponent ],
            providers: [{provide: AppStateService, useClass: AppStateServiceMock}]
        });
        fixture = TestBed.createComponent(HomeComponent);
        comp = fixture.componentInstance; 
    });

    it('Submit button disabled (form invalid)', function() {
        de = fixture.debugElement.query(By.css('button'));
        el = de.nativeElement;
        //needed on this example
        el.setAttribute('disabled', 'disabled')
        spyOn(comp, 'onSubmit');
        el.click();
        expect(comp.onSubmit).not.toHaveBeenCalled();
    });

    it('Submit disabled (form valid)', function() {
        de = fixture.debugElement.query(By.css('button'));
        el = de.nativeElement;
        spyOn(comp, 'onSubmit');
        el.click();
        expect(comp.onSubmit).toHaveBeenCalled();
    });
});