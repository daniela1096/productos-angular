import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ProductosService } from './services/productos.service';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    DetalleProductoComponent,
    EncabezadoComponent,
    ListadoProductosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    ProductosService,
    AngularFireAuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
