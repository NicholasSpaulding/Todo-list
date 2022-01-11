import { TestBed } from '@angular/core/testing';

import { TodoManagementService } from './todo-management.service';

describe('TodoManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoManagementService = TestBed.get(TodoManagementService);
    expect(service).toBeTruthy();
  });
});
