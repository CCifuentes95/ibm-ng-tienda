import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { NgbModule, NgbDateAdapter,  NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

//Components
import { AppNavbarComponent, DashboardComponent, PedidoComponent, ProductoComponent } from './components/index.components';

//Services
import { InventarioService, TipoDocumentoService, PedidoService } from './services/index.services';

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
    Ng2OrderModule,
    NgxPaginationModule,
    FormsModule

  ],
  providers: [InventarioService, TipoDocumentoService, PedidoService,
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
  bootstrap: [AppComponent]
})
export class AppModule { }
