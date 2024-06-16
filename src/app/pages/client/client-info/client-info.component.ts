import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import Client from '../../../models/client';
import { Router } from '@angular/router';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrl: './client-info.component.scss',
})
export class ClientInfoComponent implements OnInit {
  client!: Client;

  constructor(
    private routingService: Router,
    private clientService: ClientService
  ) {
    if (this.clientService.currentClient)
      this.client = this.clientService.currentClient!;
    else routingService.navigateByUrl('');
  }

  ngOnInit(): void {
    this.clientInfoForm.patchValue({
      firstName: this.client.primer_nombre,
      secondName: this.client.segundo_nombre,
      firstLastName: this.client.primer_apellido,
      secondLastName: this.client.segundo_apellido,
      documentType: this.client.tipo_de_documento,
      documentNumber: this.client.numero_documento,
      phone: this.client.telefono,
      address: this.client.direccion,
      city: this.client.ciudad_de_residencia,
    });
  }

  clientInfoForm = new FormGroup({
    firstName: new FormControl({ value: '', disabled: true }),
    secondName: new FormControl({ value: '', disabled: true }),
    firstLastName: new FormControl({ value: '', disabled: true }),
    secondLastName: new FormControl({ value: '', disabled: true }),
    documentType: new FormControl({ value: '', disabled: true }),
    documentNumber: new FormControl({ value: '', disabled: true }),
    phone: new FormControl({ value: '', disabled: true }),
    address: new FormControl({ value: '', disabled: true }),
    city: new FormControl({ value: '', disabled: true }),
  });

  goBack() {
    this.routingService.navigateByUrl('');
  }
}
