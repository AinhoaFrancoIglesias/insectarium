import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllshopComponent } from './allshop/allshop.component';
import { ShoparachnidaComponent } from './shoparachnida/shoparachnida.component';

const routes: Routes = [
  { path: '', component: AllshopComponent }, // `/pages/shop` carga AllshopComponent
  { path: 'arachnida', component: ShoparachnidaComponent }, // `/pages/shop/arachnida`
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule {}
