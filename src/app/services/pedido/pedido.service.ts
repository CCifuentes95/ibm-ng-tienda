import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrl } from '../URL/url'

@Injectable({
  providedIn: 'root'
})


export class PedidoService {
  private pathURL = 'http://localhost:8080/ibm-tienda/rest/controllers/';  // URL to web api
  private registrarURL = 'pedido/registrarPedido';  // URL to web api

  constructor(private http: HttpClient) { }

  registrarPedido( data ) {
    console.log('entró en registrarPedido');

    return this.http.post(apiUrl + this.registrarURL, data , {
      headers: new HttpHeaders().set('Content-type', 'application/json')
    } );
  }
}
