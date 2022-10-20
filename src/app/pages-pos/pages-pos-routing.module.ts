import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductosComponent } from "./catalogos/productos/productos.component";

const routes : Routes = [
    {
        path: 'productos',
        component : ProductosComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class PagesPosRoutingModule {}