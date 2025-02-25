import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Componente que gestiona las guías sobre los ciempiés, proporcionando información sobre su cuidado,
 * alimentación y alojamiento en cautiverio.
 * 
 * @component
 * 
 * Este componente ofrece varias guías detalladas relacionadas con los ciempiés, como su biología, su alimentación,
 * y las condiciones necesarias para mantenerlos en cautiverio. Los usuarios pueden abrir o cerrar cada guía al interactuar con ellas.
 */
@Component({
  selector: 'app-guideschilopoda',  // Selector para utilizar el componente en HTML
  templateUrl: './guideschilopoda.component.html',  // Archivo HTML asociado al componente
  styleUrls: ['./guideschilopoda.component.css']  // Archivo de estilos CSS asociado al componente
})
export class GuideschilopodaComponent implements OnInit {
  
  // Guía 1 sobre los ciempiés y sus características generales
  guide1 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Los ciempiés son artrópodos pertenecientes al orden Chilopoda. Son conocidos por sus múltiples patas y su habilidad para moverse rápidamente. Se encuentran en diversos hábitats, desde bosques hasta áreas áridas, y son depredadores eficaces de otros insectos. Se diferencian de los milpiés (ambos son miriápodos) en que los ciempiés tienen un par de patas por segmento corporal, mientras que los milpiés tienen dos pares por segmento.</p>
    `
  };

  // Guía 2 sobre la alimentación de los ciempiés
  guide2 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Los ciempiés deben alimentarse cada 3 días. Se recomienda ofrecerles presas vivas, como insectos pequeños, o presas pre-muertas. Las presas vivas deben ser más pequeñas que el tamaño del cuerpo del ciempiés, y deben ser consumidas en un plazo de 24 horas. Si las presas son pre-muertas, deben retirarse rápidamente para evitar la descomposición.</p>
    `
  };

  // Guía 3 sobre el alojamiento y las condiciones de vida de los ciempiés
  guide3 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p><strong>Alojamiento:</strong> El alojamiento debe ser adecuado para el tamaño y comportamiento del ciempiés. Para especies pequeñas, un espacio de unos 5×5 cm es suficiente, pero para especies más grandes puede ser necesario un espacio más grande y con suficiente ventilación. Además, se debe asegurar que el sustrato sea lo suficientemente húmedo para mantener la humedad ambiental adecuada.</p>
      
      <p><strong>Humedad:</strong> Los ciempiés necesitan un nivel de humedad moderado, pero nunca deben estar demasiado mojados. Mantén la mitad del sustrato ligeramente húmedo, especialmente para las crías que pueden deshidratarse rápidamente.</p>
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
