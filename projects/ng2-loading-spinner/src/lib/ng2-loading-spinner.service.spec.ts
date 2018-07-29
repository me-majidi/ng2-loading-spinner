import { TestBed, inject } from '@angular/core/testing';

import { Ng2LoadingSpinnerService } from './ng2-loading-spinner.service';

describe('Ng2LoadingSpinnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ng2LoadingSpinnerService]
    });
  });

  it('should be created', inject([Ng2LoadingSpinnerService], (service: Ng2LoadingSpinnerService) => {
    expect(service).toBeTruthy();
  }));
});
