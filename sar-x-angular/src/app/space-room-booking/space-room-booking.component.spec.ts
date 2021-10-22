import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceRoomBookingComponent } from './space-room-booking.component';

describe('SpaceRoomBookingComponent', () => {
  let component: SpaceRoomBookingComponent;
  let fixture: ComponentFixture<SpaceRoomBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceRoomBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceRoomBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
