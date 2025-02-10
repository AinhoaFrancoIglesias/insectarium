import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllguidesComponent } from './allguides/allguides.component';
import { ShoparachnidaComponent } from '../shop/shoparachnida/shoparachnida.component';
import { GuidesarachnidaComponent } from './guidesarachnida/guidesarachnida.component';

const routes: Routes = [
  { path: '', component: AllguidesComponent },
  { path: 'arachnida', component: GuidesarachnidaComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidesRoutingModule {}
