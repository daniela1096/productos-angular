import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
