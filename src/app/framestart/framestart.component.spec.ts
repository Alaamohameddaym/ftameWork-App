import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FramestartComponent } from './framestart.component';

describe('FramestartComponent', () => {
  let component: FramestartComponent;
  let fixture: ComponentFixture<FramestartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FramestartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FramestartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
