import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './catalogos/productos/productos.component';
import { PagesPosRoutingModule } from './pages-pos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductosComponent
  ],
  imports: [
    PagesPosRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesPosModule { }
