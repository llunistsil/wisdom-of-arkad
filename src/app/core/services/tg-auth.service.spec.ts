import { TestBed } from '@angular/core/testing';

import { TgAuthService } from './tg-auth.service';

describe('TgAuthService', () => {
  let service: TgAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TgAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
