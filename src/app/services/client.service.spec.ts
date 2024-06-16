import { TestBed } from '@angular/core/testing';

const mockClientData = [
  {
    ciudad_de_residencia: 'Bogota',
    direccion: 'cra 12 # 2-2',
    numero_documento: '1032000223',
    primer_apellido: 'Pérez',
    primer_nombre: 'Jhenny',
    segundo_apellido: 'Sosa',
    segundo_nombre: 'María',
    telefono: '+5743222234',
    tipo_de_documento: 'C',
  },
];

import { ClientService } from './client.service';

jest.mock('../assets/clients-mock.json', () => mockClientData);

describe('ClientService', () => {
  let service: ClientService;
  beforeEach(() => {
    service = new ClientService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should assign clients from clientData', () => {
    expect(service.clients).toBeDefined();
    expect(service.clients).toEqual(expect.arrayContaining(mockClientData));
  });

  it('should assign current client', () => {
    service.getClientByDocumentNumber('1032000223');

    expect(service.currentClient).toBeDefined();
    expect(service.currentClient).toEqual(mockClientData[0]);
  });

  it('should throw an error if cliient is not found', () => {
    expect(() => service.getClientByDocumentNumber('1032000')).toThrow();
  });
});
