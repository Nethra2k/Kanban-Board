import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverDueTaskComponent } from './over-due-task.component';

describe('OverDueTaskComponent', () => {
  let component: OverDueTaskComponent;
  let fixture: ComponentFixture<OverDueTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverDueTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverDueTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
