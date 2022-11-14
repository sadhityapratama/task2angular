import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontakDetailComponent } from './kontak-detail.component';

describe('KontakDetailComponent', () => {
  let component: KontakDetailComponent;
  let fixture: ComponentFixture<KontakDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KontakDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KontakDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
