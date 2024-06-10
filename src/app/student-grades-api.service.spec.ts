import { TestBed } from '@angular/core/testing';

import { StudentGradesApiService } from './student-grades-api.service';

describe('StudentGradesApiService', () => {
  let service: StudentGradesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentGradesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
