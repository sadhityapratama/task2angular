import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKontakComponent } from './add-kontak.component';

describe('AddKontakComponent', () => {
  let component: AddKontakComponent;
  let fixture: ComponentFixture<AddKontakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKontakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddKontakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
