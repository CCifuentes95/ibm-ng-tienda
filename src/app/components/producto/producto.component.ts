import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../services/index.services';
import { Producto } from '../../models/producto';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos: any[];
  key: string = 'nombrePoducto'; //set default

  p: number = 1;
  reverse: boolean = false;

  constructor(private inventarioService: InventarioService) {
  }

  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
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
