import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Componente que gestiona las guías sobre las arañas, permitiendo al usuario visualizar información detallada 
 * sobre el cuidado y características de las arañas.
 * 
 * @component
 * 
 * Este componente muestra varias guías relacionadas con las arañas, como su alimentación, hábitat y cuidado general. 
 * Las guías se pueden visualizar individualmente mediante la interacción del usuario, que puede abrir o cerrar los detalles de cada una.
 */
@Component({
  selector: 'app-guidesarachnida',  // Selector para utilizar el componente en HTML
  templateUrl: './guidesarachnida.component.html',  // Archivo HTML asociado al componente
  styleUrls: ['./guidesarachnida.component.css']  // Archivo de estilos CSS asociado al componente
})
export class GuidesarachnidaComponent implements OnInit {
  
  // Guía 1 sobre las arañas y su diversidad
  guide1 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Las arañas son artrópodos pertenecientes a la clase Arachnida. Son conocidas por su capacidad para tejer telarañas y su gran diversidad de especies. Se encuentran en casi todos los ecosistemas del mundo y juegan un papel crucial en el control de poblaciones de insectos. Algunas especies poseen veneno potente, aunque la mayoría son inofensivas para los humanos.</p>
    `
  };
  
  // Guía 2 sobre la alimentación de las arañas
  guide2 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Las arañas se alimentan principalmente de insectos. Dependiendo de la especie, pueden capturar sus presas mediante telarañas pegajosas o mediante caza activa. Es recomendable alimentarlas cada 3-5 días con insectos vivos o presas adecuadas a su tamaño. Si no consumen la presa en un día, es mejor retirarla para evitar problemas de estrés o contaminación.</p>
    `
  };
  
  // Guía 3 sobre el alojamiento y las condiciones de vida de las arañas
  guide3 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p><strong>Alojamiento:</strong> El terrario o hábitat debe adaptarse a la especie de araña que se tenga. Las especies arborícolas requieren un espacio vertical con ramas y refugios, mientras que las terrestres necesitan suficiente sustrato para excavar. La ventilación adecuada es esencial para evitar problemas de hongos y enfermedades.</p>
      
      <p><strong>Humedad:</strong> La humedad del hábitat debe ajustarse a la especie. Algunas arañas, como las tarántulas del desierto, requieren condiciones secas, mientras que otras necesitan una humedad más alta. Se recomienda pulverizar agua en el terrario según las necesidades específicas de la especie.</p>
    `
  };

  // Inyección de ActivatedRoute para acceder a los parámetros de la ruta
  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute) {}

  /**
   * Al iniciar el componente, suscribe a los parámetros de la ruta para identificar qué guía debe abrirse,
   * basándose en el parámetro 'guide' de la URL.
   */
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const guideId = +params['guide'];  // Obtiene el parámetro 'guide' de la URL y lo convierte en número
      if (guideId === 1) {
        this.guide1.isOpen = true;  // Abre la guía 1
      } else if (guideId === 2) {
        this.guide2.isOpen = true;  // Abre la guía 2
      } else if (guideId === 3) {
        this.guide3.isOpen = true;  // Abre la guía 3
      }
    });
  }

  /**
   * Permite alternar la visibilidad de una guía específica al hacer clic sobre ella.
   * 
   * @param guideId El ID de la guía a mostrar u ocultar.
   */
  toggleContent(guideId: number) {
    if (guideId === 1) {
      this.guide1.isOpen = !this.guide1.isOpen;  // Cambia el estado de visibilidad de la guía 1
    } else if (guideId === 2) {
      this.guide2.isOpen = !this.guide2.isOpen;  // Cambia el estado de visibilidad de la guía 2
    } else if (guideId === 3) {
      this.guide3.isOpen = !this.guide3.isOpen;  // Cambia el estado de visibilidad de la guía 3
    }
  }
}
