import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PedidoComponent } from './pedido/pedido.component';
import { ProductoComponent } from './producto/producto.component';
import { HttpClientModule } from '@angular/common/http';

import { InventarioService } from './services/inventario/inventario.service';
import { TipoDocumentoService } from './services/tipo_documento/tipo-documento.service';

import { NgbDateAdapter, NgbDateStruct, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { PedidoService } from './services/pedido/pedido.service';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    DashboardComponent,
    PedidoComponent,
    ProductoComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [InventarioService, TipoDocumentoService, PedidoService,
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
  bootstrap: [AppComponent]
})
export class AppModule { }
