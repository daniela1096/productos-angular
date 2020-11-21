import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductosService } from '../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {
  productos: Array<Producto> = new Array<Producto>();

  constructor(public ProductoInyectado: ProductosService, private ruta: Router) { }

  ngOnInit(): void {
    this.ProductoInyectado.mostrarProductos().subscribe((productos) => {
      this.productos = productos;
      console.log(productos);
    });
  }

  verDetalle(producto: Producto){
    this.ProductoInyectado.producto = producto;
    this.ruta.navigateByUrl('/detalle-producto');
  }

}
