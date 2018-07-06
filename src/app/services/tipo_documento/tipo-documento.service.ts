import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TipoDocumento } from '../../models/tipo-documento';
import { apiUrl } from '../URL/url'

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {
  private tiposURL = 'tipoIdentificacion/getDataTipoIdentificacion';  // URL to web api

  constructor(private http: HttpClient) { }

  getTipoDocumentos() {
    return this.http.get<TipoDocumento[]>(apiUrl + this.tiposURL);
  }

}
