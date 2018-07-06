import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TipoDocumento } from '../../models/tipo-documento';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {
  private pathURL = 'http://localhost:8080/ibm-tienda/rest/controllers/';  // URL to web api
  private tiposURL = 'tipoIdentificacion/getDataTipoIdentificacion';  // URL to web api

  constructor(private http: HttpClient) { }

  getTipoDocumentos() {
    return this.http.get<TipoDocumento[]>(this.pathURL + this.tiposURL);
  }

}
