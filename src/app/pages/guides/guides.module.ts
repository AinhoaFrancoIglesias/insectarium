import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';  

import { AllguidesComponent } from './allguides/allguides.component';
import { GuidesarachnidaComponent } from './guidesarachnida/guidesarachnida.component';
import { GuidesblattodeaComponent } from './guidesblattodea/guidesblattodea.component';
import { GuideschilopodaComponent } from './guideschilopoda/guideschilopoda.component';
import { GuidescoleopteraComponent } from './guidescoleoptera/guidescoleoptera.component';
import { GuidescrustaceaComponent } from './guidescrustacea/guidescrustacea.component';
import { GuidesdiplopodaComponent } from './guidesdiplopoda/guidesdiplopoda.component';
import { GuidesgastropodaComponent } from './guidesgastropoda/guidesgastropoda.component';
import { GuideshymenopteraComponent } from './guideshymenoptera/guideshymenoptera.component';
import { GuidesisopodaComponent } from './guidesisopoda/guidesisopoda.component';
import { GuideslepidopteraComponent } from './guideslepidoptera/guideslepidoptera.component';
import { GuidesmantodeaComponent } from './guidesmantodea/guidesmantodea.component';
import { GuidesphasmatodeaComponent } from './guidesphasmatodea/guidesphasmatodea.component';
import { AuthRoutingModule } from '../../auth/auth-routing.module';

/**
 * Módulo que agrupa todas las guías de cuidados y características de diferentes tipos de insectos.
 * 
 * Este módulo se encarga de manejar las páginas de guías específicas para diferentes clases de insectos
 * y proporciona los componentes necesarios para cada tipo de guía, como arañas, cucarachas, grillos, etc.
 */
@NgModule({
  declarations: [
    AllguidesComponent,  // Componente que muestra todas las guías
    GuidesarachnidaComponent,  // Componente para las guías de arácnidos
    GuidesblattodeaComponent,  // Componente para las guías de cucarachas
    GuideschilopodaComponent,  // Componente para las guías de ciempiés
    GuidescoleopteraComponent,  // Componente para las guías de escarabajos
    GuidescrustaceaComponent,  // Componente para las guías de crustáceos
    GuidesdiplopodaComponent,  // Componente para las guías de diplópodos (milpiés)
    GuidesgastropodaComponent,  // Componente para las guías de gastrópodos (caracoles y babosas)
    GuideshymenopteraComponent,  // Componente para las guías de himenópteros (abejas, hormigas, etc.)
    GuidesisopodaComponent,  // Componente para las guías de isópodos
    GuideslepidopteraComponent,  // Componente para las guías de lepidópteros (mariposas)
    GuidesmantodeaComponent,  // Componente para las guías de mantis
    GuidesphasmatodeaComponent  // Componente para las guías de fásmidos (insectos palo)
  ],
  imports: [
    CommonModule,  // Proporciona funcionalidades comunes como directivas y pipes
    ReactiveFormsModule,  // Proporciona soporte para formularios reactivos
    AuthRoutingModule  // Módulo de rutas de autenticación
  ],
  exports: []
})
export class GuidesModule { }
