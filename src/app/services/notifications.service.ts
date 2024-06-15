import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  constructor(private toastr: ToastrService) {}

  showErrorToast(pMessage: string) {
    this.toastr.error(pMessage, 'ERROR');
  }
}
