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

@NgModule({
  declarations: [
    AllguidesComponent,
    GuidesarachnidaComponent,
    GuidesblattodeaComponent,
    GuideschilopodaComponent,
    GuidescoleopteraComponent,
    GuidescrustaceaComponent,
    GuidesdiplopodaComponent,
    GuidesgastropodaComponent,
    GuideshymenopteraComponent,
    GuidesisopodaComponent,
    GuideslepidopteraComponent,
    GuidesmantodeaComponent,
    GuidesphasmatodeaComponent
  ],
  imports: [
        CommonModule,
        ReactiveFormsModule,  
        AuthRoutingModule
  ],
  exports: [

  ]
})
export class GuidesModule { }
