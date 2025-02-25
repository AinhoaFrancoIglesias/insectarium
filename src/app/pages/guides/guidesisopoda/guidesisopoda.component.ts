import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Componente que gestiona las guías sobre el cuidado de los isópodos, proporcionando información sobre su hábitat,
 * su alimentación y los niveles adecuados de humedad para mantenerlos saludables en cautiverio.
 * 
 * @component
 * 
 * Este componente ofrece varias guías detalladas relacionadas con el cuidado de los isópodos, como sus necesidades
 * de humedad, su dieta y el tipo de hábitat adecuado para mantenerlos. Los usuarios pueden abrir o cerrar
 * cada guía al interactuar con ellas.
 */
@Component({
  selector: 'app-guidesisopoda',  // Selector para utilizar el componente en HTML
  templateUrl: './guidesisopoda.component.html',  // Archivo HTML asociado al componente
  styleUrls: ['./guidesisopoda.component.css']  // Archivo de estilos CSS asociado al componente
})
export class GuidesisopodaComponent implements OnInit {

  // Guía 1 sobre los niveles de humedad adecuados para los isópodos
  guide1 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>El equilibrio entre no demasiada y no poca humedad es esencial para mantener a tus isópodos saludables. Un nivel de humedad entre el 60% y el 80% es adecuado para la mayoría de las especies. Usa un humidificador o pulveriza agua en el terrario de vez en cuando para mantener este nivel.</p>
    `
  };

  // Guía 2 sobre la alimentación de los isópodos
  guide2 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Los isópodos se alimentan principalmente de materia orgánica en descomposición, como hojas, madera o frutas. Puedes ofrecerles restos de verduras o frutas, pero asegúrate de que no estén en mal estado. También puedes añadir calcio en polvo para ayudar en el proceso de muda.</p>
    `
  };

  // Guía 3 sobre cómo crear el hábitat adecuado para los isópodos
  guide3 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Un hábitat adecuado para tus isópodos debe ser oscuro, húmedo y bien ventilado. Además, los colémbolos pueden ser aliados útiles para mantener el ambiente limpio al consumir restos orgánicos no ingeridos por los isópodos.</p>
    `
  };

  // Inyección de ActivatedRoute para acceder a los parámetros de la ruta
  constructor(private route: ActivatedRoute) {}

  /**
   * Al iniciar el componente, se suscribe a los parámetros de la ruta para identificar qué guía debe abrirse,
   * basándose en el parámetro 'guide' de la URL.
   */
  ngOnInit(): void {
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
  toggleContent(guideId: number): void {
    if (guideId === 1) {
      this.guide1.isOpen = !this.guide1.isOpen;  // Cambia el estado de visibilidad de la guía 1
    } else if (guideId === 2) {
      this.guide2.isOpen = !this.guide2.isOpen;  // Cambia el estado de visibilidad de la guía 2
    } else if (guideId === 3) {
      this.guide3.isOpen = !this.guide3.isOpen;  // Cambia el estado de visibilidad de la guía 3
    }
  }
}
