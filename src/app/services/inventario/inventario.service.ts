import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../../models/producto';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private pathURL = 'http://localhost:8080/ibm-tienda/rest/controllers/';  // URL to web api
  private productsURL = 'detalleInventario/getDataDetalleInventario';  // URL to web api

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Producto[]>(this.pathURL + this.productsURL);
  }

}
