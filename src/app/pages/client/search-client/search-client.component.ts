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

import { DataList } from '../../../shared/types/shared.types';

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

  public documentTypes: DataList = [
    {
      name: 'Cédula de ciudadanía',
      code: 'C',
    },
    {
      name: 'Pasaporte',
      code: 'P',
    },
  ];

  clientSearchForm = new FormGroup({
    documentType: new FormControl('', Validators.required),
    documentNumber: new FormControl(0, [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(11),
    ]),
  });

  async submitSearch() {
    try {
      const docType = String(
        this.documentTypes.find(
          (x) => x.name === this.clientSearchForm.value.documentType!
        )!.code
      );

      const docNumber = String(
        this.clientSearchForm.value.documentNumber!
      ).replace(/[^0-9]+/g, '');

      await this.clientService.getClientByDocumentNumber(docType, docNumber);

      this.routingService.navigateByUrl('client-info');
    } catch (error: any) {
      this.notificationsService.showErrorToast(error.message);
      throw error;
    }
  }
}
