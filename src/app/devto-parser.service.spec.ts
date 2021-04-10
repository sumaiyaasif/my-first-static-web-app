import { TestBed } from '@angular/core/testing';

import { DevtoParserService } from './devto-parser.service';

describe('DevtoParserService', () => {
  let service: DevtoParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevtoParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
