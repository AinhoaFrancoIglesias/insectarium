import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Componente que gestiona las guías sobre las cucarachas, proporcionando información sobre su cuidado,
 * alimentación y alojamiento en cautiverio.
 * 
 * @component
 * 
 * Este componente ofrece varias guías detalladas relacionadas con las cucarachas, como su resistencia, su alimentación,
 * y las condiciones necesarias para mantenerlas en cautiverio. Los usuarios pueden abrir o cerrar cada guía al interactuar con ellas.
 */
@Component({
  selector: 'app-guidesblattodea',  // Selector para utilizar el componente en HTML
  templateUrl: './guidesblattodea.component.html',  // Archivo HTML asociado al componente
  styleUrls: ['./guidesblattodea.component.css']  // Archivo de estilos CSS asociado al componente
})
export class GuidesblattodeaComponent implements OnInit {
  
  // Guía 1 sobre las cucarachas y sus características generales
  guide1 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Las cucarachas son insectos pertenecientes al orden Blattodea. Son conocidos por su resistencia, ya que pueden sobrevivir en condiciones extremas, y por su habilidad para adaptarse rápidamente a distintos ambientes. Aunque a menudo se consideran plagas, las cucarachas juegan un papel importante en los ecosistemas, ayudando en la descomposición de materia orgánica.</p>
    `
  };

  // Guía 2 sobre la alimentación de las cucarachas
  guide2 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Las cucarachas son omnívoras y pueden alimentarse de una amplia variedad de materiales orgánicos, incluidos restos de comida, madera, papel y materiales en descomposición. En cautiverio, es recomendable ofrecerles alimentos balanceados (frutas, verduras, y ocasionalmente proteínas). Mantén siempre su comida fresca y limpia para evitar la acumulación de bacterias.</p>
    `
  };

  // Guía 3 sobre el alojamiento y las condiciones de vida de las cucarachas
  guide3 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p><strong>Alojamiento:</strong> Para mantener cucarachas en cautiverio, se necesita un espacio adecuado dependiendo de la especie. Un terrario con buen sistema de ventilación es esencial. Un tamaño adecuado es de aproximadamente 30×30 cm para un pequeño grupo. Además, es importante agregar elementos para trepar o esconderse, como troncos o cartón, según las necesidades específicas de la especie.</p>
      
      <p><strong>Humedad:</strong> Las cucarachas prefieren ambientes con alta humedad. Mantén el sustrato ligeramente húmedo para que puedan mantenerse hidratadas, pero evita que se acumule agua estancada. Algunas especies también disfrutan de una ligera neblina de agua durante el día.</p>
    `
  };

  // Inyección de ActivatedRoute para acceder a los parámetros de la ruta
  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute) {}

  /**
   * Al iniciar el componente, se suscribe a los parámetros de la ruta para identificar qué guía debe abrirse,
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
