import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guidesarachnida',
  templateUrl: './guidesarachnida.component.html',
  styleUrls: ['./guidesarachnida.component.css']
})
export class GuidesarachnidaComponent implements OnInit {
  guide1 = {
    isOpen: false,
    content: `
      <p>Las arañas son artrópodos pertenecientes a la clase Arachnida. Son conocidas por su capacidad para tejer telarañas y su gran diversidad de especies. Se encuentran en casi todos los ecosistemas del mundo y juegan un papel crucial en el control de poblaciones de insectos. Algunas especies poseen veneno potente, aunque la mayoría son inofensivas para los humanos.</p>
    `
  };
  
  guide2 = {
    isOpen: false,
    content: `
      <p>Las arañas se alimentan principalmente de insectos. Dependiendo de la especie, pueden capturar sus presas mediante telarañas pegajosas o mediante caza activa. Es recomendable alimentarlas cada 3-5 días con insectos vivos o presas adecuadas a su tamaño. Si no consumen la presa en un día, es mejor retirarla para evitar problemas de estrés o contaminación.</p>
    `
  };
  
  guide3 = {
    isOpen: false,
    content: `
      <p><strong>Alojamiento:</strong> El terrario o hábitat debe adaptarse a la especie de araña que se tenga. Las especies arborícolas requieren un espacio vertical con ramas y refugios, mientras que las terrestres necesitan suficiente sustrato para excavar. La ventilación adecuada es esencial para evitar problemas de hongos y enfermedades.</p>
      
      <p><strong>Humedad:</strong> La humedad del hábitat debe ajustarse a la especie. Algunas arañas, como las tarántulas del desierto, requieren condiciones secas, mientras que otras necesitan una humedad más alta. Se recomienda pulverizar agua en el terrario según las necesidades específicas de la especie.</p>
    `
  };

  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const guideId = +params['guide'];
      if (guideId === 1) {
        this.guide1.isOpen = true;
      } else if (guideId === 2) {
        this.guide2.isOpen = true;
      } else if (guideId === 3) {
        this.guide3.isOpen = true;
      }
    });
  }

  toggleContent(guideId: number) {
    if (guideId === 1) {
      this.guide1.isOpen = !this.guide1.isOpen;
    } else if (guideId === 2) {
      this.guide2.isOpen = !this.guide2.isOpen;
    } else if (guideId === 3) {
      this.guide3.isOpen = !this.guide3.isOpen;
    }
  }
}
