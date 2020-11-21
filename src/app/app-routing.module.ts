import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'crear-productos', component: ProductosComponent},
  {path: 'listado-productos', component: ListadoProductosComponent  },
  {path: 'detalle-producto', component: DetalleProductoComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
