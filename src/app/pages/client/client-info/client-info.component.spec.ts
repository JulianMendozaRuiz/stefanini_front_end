import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInfoComponent } from './client-info.component';
import { Router } from '@angular/router';
import { ClientService } from '../../../services/client.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('ClientInfoComponent', () => {
  let component: ClientInfoComponent;
  let fixture: ComponentFixture<ClientInfoComponent>;
  let mockupRouter: any;
  let mockupClientService: any;

  const mockNavigateByUrl = jest.fn();
  mockupRouter = {
    navigateByUrl: mockNavigateByUrl,
  };

  let mockCurrentClient;
  mockupClientService = {
    currentClient: mockCurrentClient,
  };

  beforeEach(async () => {
    mockCurrentClient = {
      ciudad_de_residencia: 'Bogota',
      direccion: 'cra 12 # 2-2',
      numero_documento: '1032000223',
      primer_apellido: 'Pérez',
      primer_nombre: 'Jhenny',
      segundo_apellido: 'Sosa',
      segundo_nombre: 'María',
      telefono: '+5743222234',
      tipo_de_documento: 'C',
    };

    await TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: mockupRouter },
        { provide: ClientService, useValue: mockupClientService },
        ReactiveFormsModule,
      ],
      imports: [ClientInfoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
