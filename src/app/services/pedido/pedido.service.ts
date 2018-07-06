import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class PedidoService {
  private pathURL = 'http://localhost:8080/ibm-tienda/rest/controllers/';  // URL to web api
  private registrarURL = 'pedido/registrarPedido';  // URL to web api

  constructor(private http: HttpClient) { }

  registrarPedido( data ) {
    console.log('entró en registrarPedido');

    return this.http.post(this.pathURL + this.registrarURL, data , {
      headers: new HttpHeaders().set('Content-type', 'application/json')
    } );
  }
}
