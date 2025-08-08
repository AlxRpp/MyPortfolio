import { TestBed } from '@angular/core/testing';

import { ProjectsData } from './projectsData';

describe('Projects', () => {
  let service: ProjectsData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
