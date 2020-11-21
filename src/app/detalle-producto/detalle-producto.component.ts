import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  producto: Producto = new Producto();

  constructor(public ProductoInyectado: ProductosService) { 
    this.producto = this.ProductoInyectado.producto;
  }

  ngOnInit(): void {
    // console.log(this.ProductoInyectado.producto.nombre);
  }


  eliminar(id: string){
    this.ProductoInyectado.eliminarProducto(id).subscribe(datos => {
      console.log(datos);
      return window.location.href = 'http://localhost:4200/listado-productos';
    });
  }

}
