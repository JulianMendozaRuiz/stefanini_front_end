import { Injectable } from '@angular/core';
import clientData from '../assets/clients-mock.json';
import Client from '../models/client';
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  clients!: Client[];

  currentClient: Client | null = null;

  constructor() {
    this.clients = clientData;
  }

  getClientByDocumentNumber(pDocumentNumber: string) {
    const client = this.clients.find(
      (c) => c.numero_documento === pDocumentNumber
    );

    if (!client) throw new Error('Cliente no pudo ser encontrado');

    this.currentClient = client;
  }
}
