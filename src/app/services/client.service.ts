import { Injectable } from '@angular/core';
import clientData from '../assets/clients-mock.json';
import Client from '../models/client';
import { environment } from '../../environment/environment.dev';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
export class ClientService {
  clients!: Client[];

  currentClient: Client | null = null;

  constructor() {
    if (environment.useMocks) this.clients = clientData;
  }

  async getClientByDocumentNumber(
    pDocumentType: string,
    pDocumentNumber: string
  ) {
    if (environment.useMocks)
      this.getClientFromMock(pDocumentType, pDocumentNumber);
    else await this.getClientFromAPI(pDocumentType, pDocumentNumber);
  }

  getClientFromMock(pDocumentType: string, pDocumentNumber: string) {
    const clients = this.clients.filter(
      (client) => client.tipo_de_documento === pDocumentType
    );

    const client = clients.find((c) => c.numero_documento === pDocumentNumber);

    if (!client) throw new Error('Cliente no pudo ser encontrado');

    this.currentClient = client;
  }

  async getClientFromAPI(pDocumentType: string, pDocumentNumber: string) {
    try {
      const response = await axios.get(
        `localhost:8090/api/v1/clients/${pDocumentType}-${pDocumentNumber}`
      );

      if (response.status === 404)
        throw new Error('Cliente no pudo ser encontrado');

      this.currentClient = response.data;
    } catch (error) {
      throw error;
    }
  }
}
