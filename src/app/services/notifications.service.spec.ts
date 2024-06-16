import { TestBed } from '@angular/core/testing';

import { NotificationsService } from './notifications.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

jest.mock('ngx-toastr');

describe('NotificationsService', () => {
  let service: NotificationsService;
  let mockupToastrService: any;

  mockupToastrService = {
    error: jest.fn(),
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [{ provide: ToastrService, useValue: mockupToastrService }],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    });
    service = TestBed.inject(NotificationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call error toast', () => {
    const spyError = jest.spyOn(mockupToastrService, 'error');

    service.showErrorToast('Message');
    expect(spyError).toHaveBeenCalledTimes(1);

    expect(spyError).toHaveBeenCalledWith('Message', 'ERROR');
  });
});
