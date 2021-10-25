import { TestBed } from '@angular/core/testing';

import { SpaceRoomService } from './space-room.service';

describe('SpaceRoomService', () => {
  let service: SpaceRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpaceRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
