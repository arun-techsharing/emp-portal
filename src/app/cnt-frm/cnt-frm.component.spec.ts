import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CntFrmComponent } from './cnt-frm.component';

describe('CntFrmComponent', () => {
  let component: CntFrmComponent;
  let fixture: ComponentFixture<CntFrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CntFrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CntFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
