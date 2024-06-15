export default class Client {
  tipo_de_documento: string | undefined;
  numero_documento: string | undefined;
  primer_nombre: string | undefined;
  segundo_nombre: string | undefined;
  primer_apellido: string | undefined;
  segundo_apellido: string | undefined;
  telefono: string | undefined;
  direccion: string | undefined;
  ciudad_de_residencia: string | undefined;
  constructor(
    pTipoDeDocumento: string,
    pNumeroDocumento: string,
    pPrimerNombre: string,
    pSegundoNombre: string,
    pPrimerApellido: string,
    pSegundoApellido: string,
    pTelefono: string,
    pDireccion: string,
    pCiudadDeResidencia: string
  ) {
    this.tipo_de_documento = pTipoDeDocumento;
    this.numero_documento = pNumeroDocumento;
    this.primer_nombre = pPrimerNombre;
    this.segundo_nombre = pSegundoNombre;
    this.primer_apellido = pPrimerApellido;
    this.segundo_apellido = pSegundoApellido;
    this.telefono = pTelefono;
    this.direccion = pDireccion;
    this.ciudad_de_residencia = pCiudadDeResidencia;
  }
}
