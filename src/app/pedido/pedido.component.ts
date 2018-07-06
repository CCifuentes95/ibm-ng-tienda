import { Component, OnInit } from '@angular/core';
import { DetallePedido } from '../models/detalle-pedido';
import { InventarioService } from '../services/inventario/inventario.service';
import { TipoDocumentoService } from '../services/tipo_documento/tipo-documento.service';
import { PedidoService } from '../services/pedido/pedido.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  empresa = {
      id: 1,
      nombre: 'IBM SHOP',
      // tslint:disable-next-line:max-line-length
      descripcion: 'El servicio de Pedidos consta de un formulario que deberés llenar a continuación'
  };
  detallesPedido: DetallePedido[];
  productos: any[];
  tiposDocumentos: any[];

  idTipoDoc: number;
  nombre: string;
  apellido: string;
  identificacion: string;
  direccion: string;
  fecha: Date;


  constructor(private inventarioService: InventarioService,
    private tipodocumentoService: TipoDocumentoService,
    private pedidoService: PedidoService
  ) { }

  addDetalle() {
    const detalle: DetallePedido = {
      cantidad: 1,
      precio: 1
    };

    this.detallesPedido.push(detalle);
  }

  ngOnInit() {
    this.detallesPedido = [];

    this.inventarioService.getProducts().subscribe(data => {
      const js = JSON.stringify(data);
      const json = JSON.parse(js);
      this.productos = json;
    });

    this.tipodocumentoService.getTipoDocumentos().subscribe(data => {
      const js = JSON.stringify(data);
      const json = JSON.parse(js);
      this.tiposDocumentos = json;
    });

  }

  setPrice(idSelected: number, detalle: DetallePedido) {
    detalle.id_Producto = idSelected;
    // tslint:disable-next-line:triple-equals
    const product = this.productos.find(p => p.id == idSelected);
    detalle.precio = product.precioBase;
  }

  setTipoDoc(idSelected: number) {
    this.idTipoDoc = idSelected;
  }

  delete(detalle: DetallePedido) {
    const response = confirm('Está seguro de eliminar este producto ?');
    if (response) {
      this.detallesPedido = this.detallesPedido.filter(obj => obj !== detalle);
    }
  }


  confirmar() {
    const fecha = JSON.stringify(this.fecha);
    console.log('Nombre:' + this.nombre);
    console.log('Apellido:' + this.apellido);
    console.log('Idenf:' + this.identificacion);
    console.log('dir:' + this.direccion);
    console.log('fecha:' + fecha );
    console.log('Tipo doc seleccionado:' + this.idTipoDoc);
    console.log( 'Lista de  Pedidos: ' +  JSON.stringify(this.detallesPedido) );


    const fechaClean = fecha.split('T')[0].substring(1);

    const data = {
      nombre: this.nombre,
      apellido: this.apellido,
      idTipoId: this.idTipoDoc,
      identificacion: this.identificacion,
      direccion: this.direccion,
      fechaPedido: fechaClean,
      detallePedidoDTOs: this.detallesPedido
    };

    console.log( 'Los datos son: ' + JSON.stringify(data) );

    this.pedidoService.registrarPedido(data).subscribe(res => {
      console.log('###########################################');
      const js = JSON.stringify(res);
      const json = JSON.parse(js);
      console.log('Los Datos son' + js);
      alert(json.mensaje);
      console.log('###########################################');

    });
  }

}
