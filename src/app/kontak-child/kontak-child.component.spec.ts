import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KontakChildComponent } from './kontak-child.component';

describe('KontakChildComponent', () => {
  let component: KontakChildComponent;
  let fixture: ComponentFixture<KontakChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KontakChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KontakChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
