import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../../models/producto';
import { apiUrl } from '../URL/url'
@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private productsURL = 'detalleInventario/getDataDetalleInventario';  // URL to web api

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Producto[]>(apiUrl + this.productsURL);
  }

}
