import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Componente que gestiona las guías sobre los milpiés, proporcionando información sobre su biología,
 * alimentación, y alojamiento en cautiverio.
 * 
 * @component
 * 
 * Este componente ofrece varias guías detalladas relacionadas con los milpiés, como sus características, 
 * sus hábitos alimenticios, y las condiciones necesarias para mantenerlos en cautiverio. Los usuarios pueden abrir o cerrar
 * cada guía al interactuar con ellas.
 */
@Component({
  selector: 'app-guidesdiplopoda',  // Selector para utilizar el componente en HTML
  templateUrl: './guidesdiplopoda.component.html',  // Archivo HTML asociado al componente
  styleUrls: ['./guidesdiplopoda.component.css']  // Archivo de estilos CSS asociado al componente
})
export class GuidesdiplopodaComponent implements OnInit {

  // Guía 1 sobre los milpiés y su biología
  guide1 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Los milpiés son artrópodos pertenecientes al orden Diplopoda. Se caracterizan por tener un cuerpo segmentado con dos pares de patas por segmento. A diferencia de los ciempiés, los milpiés son herbívoros y se alimentan principalmente de materia vegetal en descomposición. Son conocidos por su habilidad para enrollarse en espiral cuando se sienten amenazados, lo que les proporciona protección.</p>
    `
  };

  // Guía 2 sobre la alimentación de los milpiés
  guide2 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Los milpiés son principalmente herbívoros, alimentándose de hojas, madera en descomposición, y otras materias orgánicas. También pueden comer hongos y restos de plantas muertas. Es importante ofrecerles un ambiente húmedo y sombreado, ya que prefieren lugares frescos y con alta humedad. Mantén su hábitat libre de alimentos procesados y pesticidas.</p>
    `
  };

  // Guía 3 sobre el alojamiento y las condiciones de vida de los milpiés
  guide3 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p><strong>Alojamiento:</strong> Los milpiés necesitan un entorno húmedo y fresco. Un recipiente adecuado debe tener suficiente sustrato húmedo como tierra o musgo para que puedan enterrarse. Asegúrate de proporcionar escondites como trozos de madera o corteza para que puedan refugiarse. Los milpiés también necesitan un espacio bien ventilado.</p>

      <p><strong>Humedad:</strong> La humedad es esencial para la salud de los milpiés, ya que su piel es permeable al agua y pueden deshidratarse rápidamente. Mantén su entorno húmedo, pero no empapado, y asegúrate de que tengan acceso a agua fresca en todo momento.</p>
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
