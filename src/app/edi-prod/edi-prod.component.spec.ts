import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdiProdComponent } from './edi-prod.component';

describe('EdiProdComponent', () => {
  let component: EdiProdComponent;
  let fixture: ComponentFixture<EdiProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdiProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdiProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
