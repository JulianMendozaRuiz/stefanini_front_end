import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { NotificationsService } from '../../../services/notifications.service';

@Component({
  selector: 'app-search-client',
  templateUrl: './search-client.component.html',
  styleUrl: './search-client.component.scss',
})
export class SearchClientComponent {
  constructor(
    private routingService: Router,
    private clientService: ClientService,
    private notificationsService: NotificationsService
  ) {}

  documentTypes = ['Cédula de ciudadanía', 'Pasaporte'];

  clientSearchForm = new FormGroup({
    documentType: new FormControl('', Validators.required),
    documentNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(11),
    ]),
  });

  submitSearch() {
    try {
      this.clientService.getClientByDocumentNumber(
        this.clientSearchForm.value.documentNumber!
      );

      this.routingService.navigateByUrl('client-info');
    } catch (error: any) {
      this.notificationsService.showErrorToast(error.message);
      throw error;
    }
  }
}
