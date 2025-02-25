import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllguidesComponent } from './allguides/allguides.component';
import { ShoparachnidaComponent } from '../shop/shoparachnida/shoparachnida.component';
import { GuidesarachnidaComponent } from './guidesarachnida/guidesarachnida.component';

/**
 * Configuración de rutas para la sección de guías en la aplicación.
 * 
 * Este módulo define las rutas que permiten la navegación entre las distintas
 * páginas de guías, como las guías generales y específicas de los arácnidos.
 */
const routes: Routes = [
  { path: '', component: AllguidesComponent },  // Ruta principal que muestra todas las guías
  { path: 'arachnida', component: GuidesarachnidaComponent },  // Ruta para las guías de arácnidos
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Configura el RouterModule para las rutas definidas
  exports: [RouterModule]  // Exporta el RouterModule para ser utilizado en otras partes de la aplicación
})
export class GuidesRoutingModule {}
