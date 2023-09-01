import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnDetailsComponent } from './column-details.component';

describe('ColumnDetailsComponent', () => {
  let component: ColumnDetailsComponent;
  let fixture: ComponentFixture<ColumnDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
