import { Component, OnInit } from '@angular/core';
import { Empresa } from '../../models/empresa';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  empresa: Empresa;
  constructor() {
    this.empresa = {
      id: 1,
      nombre: 'IBM SHOP',
      imagen: 'http://www.solutekcolombia.com/images/soporte_tecnico_ibm_colombia.jpg',
      // tslint:disable-next-line:max-line-length
      descripcion: 'IBM llega a Colombia en 1937 con el nombre de “Watson Business Machines Co. Of Colombia”. Tres años después, inicia su expansión en el país, con la apertura de las sucursales de Medellín en 1940, Barranquilla en 1947 y Cali en 1949. Para 1953 la compañía cambia de nombre a IBM Colombia S.A. Desde entonces, IBM ha estado comprometida con el crecimiento de Colombia aportando a la competitividad de las empresas y poniendo a disposición del país la experiencia, el conocimiento y la tecnología para contribuir a la solución de los desafíos presentes y futuros. ',
      contacto: 'Informaciones generales Bogotá: +57 1 390 1000 Cali: + 57 2 485 0495'
    };

   }

  ngOnInit() {
  }

}
