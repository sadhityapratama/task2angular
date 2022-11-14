import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKontakFormComponent } from './add-kontak-form.component';

describe('AddKontakFormComponent', () => {
  let component: AddKontakFormComponent;
  let fixture: ComponentFixture<AddKontakFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddKontakFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddKontakFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
