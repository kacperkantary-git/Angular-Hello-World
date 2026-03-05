import { TestBed } from '@angular/core/testing';
import { IpInfoService } from './ip-info.service';
import { provideHttpClient } from '@angular/common/http';

describe('IpInfoService', () => {
  let service: IpInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()]
    });
    service = TestBed.inject(IpInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});