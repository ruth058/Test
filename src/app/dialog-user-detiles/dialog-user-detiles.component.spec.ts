import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogUserDetilesComponent } from './dialog-user-detiles.component';

describe('DialogUserDetilesComponent', () => {
  let component: DialogUserDetilesComponent;
  let fixture: ComponentFixture<DialogUserDetilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogUserDetilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogUserDetilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
