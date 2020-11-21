import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ProductosService {
  rutaApi = '/api/v2/productos';

  producto: Producto = new Producto();
  constructor(private http: HttpClient) {}

  mostrarProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.rutaApi);
  }

  agregarProducto(producto: Producto){
    return this.http.post(this.rutaApi, producto);
  }

  eliminarProducto(id: string){
    return this.http.delete(this.rutaApi + `/${id}`);
  }

}
