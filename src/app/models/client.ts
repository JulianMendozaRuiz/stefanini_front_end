module.exports = class Client {
  numero_documento: String | undefined;
  primer_nombre: String | undefined;
  segundo_nombre: String | undefined;
  primer_apellido: String | undefined;
  segundo_apellido: String | undefined;
  telefono: String | undefined;
  direccion: String | undefined;
  ciudad_de_residencia: String | undefined;
  constructor(
    pNumeroDocumento: String,
    pPrimerNombre: String,
    pSegundoNombre: String,
    pPrimerApellido: String,
    pSegundoApellido: String,
    pTelefono: String,
    pDireccion: String,
    pCiudadDeResidencia: String
  ) {
    this.numero_documento = pNumeroDocumento;
    this.primer_nombre = pPrimerNombre;
    this.segundo_nombre = pSegundoNombre;
    this.primer_apellido = pPrimerApellido;
    this.segundo_apellido = pSegundoApellido;
    this.telefono = pTelefono;
    this.direccion = pDireccion;
    this.ciudad_de_residencia = pCiudadDeResidencia;
  }
};
