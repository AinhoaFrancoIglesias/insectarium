import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllguidesComponent } from './allguides/allguides.component';

const routes: Routes = [
  { path: '', component: AllguidesComponent }, // `/pages/guides` carga AllguidesComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidesRoutingModule {}
