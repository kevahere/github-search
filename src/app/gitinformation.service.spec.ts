import { TestBed } from '@angular/core/testing';

import { GitinformationService } from './gitinformation.service';

describe('GitinformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitinformationService = TestBed.get(GitinformationService);
    expect(service).toBeTruthy();
  });
});
