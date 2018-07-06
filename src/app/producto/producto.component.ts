import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../services/inventario/inventario.service';
import { Producto } from '../models/producto';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos: any[];

  constructor(private inventarioService: InventarioService) {
  }

  ngOnInit() {
    this.inventarioService.getProducts().subscribe( data => {
      console.log('llegaron datos' + data);

      const js = JSON.stringify(data);
      const json = JSON.parse(js);
      console.log('llegaron datos' + js );
      this.productos = json;


    });
  }

}
