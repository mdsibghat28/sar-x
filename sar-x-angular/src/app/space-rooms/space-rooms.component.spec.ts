import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceRoomsComponent } from './space-rooms.component';

describe('SpaceRoomsComponent', () => {
  let component: SpaceRoomsComponent;
  let fixture: ComponentFixture<SpaceRoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceRoomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
