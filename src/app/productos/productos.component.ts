import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../models/producto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  productosArray: Array<any> = new Array<Producto>();
  productoOne: Producto = new Producto();
  public formData;
  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, public ProductoInyectado: ProductosService ) {}

  ngOnInit(): void {
    this.buildForm();
    console.log(this.formGroup.value);
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required]
    });
  }

  public sendData() {
    this.productoOne = this.formGroup.value as Producto;
    if ((this.productoOne.nombre === '') && (this.productoOne.precio === '')){
      Swal.fire(
        'Error',
        'Recuerda llenar los datos, los que tienen * son obligatorios',
        'error'
      );
    }
    this.ProductoInyectado.agregarProducto(this.productoOne).subscribe((productoRecibido) => {
      console.log(productoRecibido);
      this.formGroup.reset();
      Swal.fire(
        'Registro Exitoso',
        'Tu producto ha sido guardado',
        'success'
      );
    });
  }

}
