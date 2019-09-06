import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NLineaComponent } from './n-linea.component';

describe('NLineaComponent', () => {
  let component: NLineaComponent;
  let fixture: ComponentFixture<NLineaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NLineaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
