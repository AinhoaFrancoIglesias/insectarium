import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Componente que gestiona las guías sobre los coleópteros, proporcionando información sobre su biología,
 * alimentación, y alojamiento en cautiverio.
 * 
 * @component
 * 
 * Este componente ofrece varias guías detalladas relacionadas con los coleópteros, como sus características, 
 * sus hábitos alimenticios, y las condiciones necesarias para mantenerlos en cautiverio. Los usuarios pueden abrir o cerrar
 * cada guía al interactuar con ellas.
 */
@Component({
  selector: 'app-guidescoleoptera',  // Selector para utilizar el componente en HTML
  templateUrl: './guidescoleoptera.component.html',  // Archivo HTML asociado al componente
  styleUrls: ['./guidescoleoptera.component.css']  // Archivo de estilos CSS asociado al componente
})
export class GuidescoleopteraComponent implements OnInit {

  // Guía 1 sobre los coleópteros y su biología
  guide1 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Los coleópteros son el orden de insectos más grande, con más de 400.000 especies descritas. Suelen tener una alta diversidad en sus hábitos y hábitats, encontrándose en casi todos los ecosistemas del planeta. Los coleópteros son esenciales en el control de plagas y en la descomposición de materia orgánica.</p>
    `
  };

  // Guía 2 sobre la alimentación de los coleópteros
  guide2 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Los coleópteros pueden ser herbívoros, carnívoros o descomponedores. Algunos se alimentan de hojas, flores, madera en descomposición, o incluso de insectos más pequeños. El tipo de dieta depende de la especie, por lo que es importante investigar las necesidades alimenticias de la especie en particular.</p>
    `
  };

  // Guía 3 sobre el alojamiento y las condiciones de vida de los coleópteros
  guide3 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p><strong>Alojamiento:</strong> Los coleópteros requieren un hábitat adecuado para su desarrollo, que incluya refugios, humedad adecuada y suficiente espacio. Los adultos y las larvas de algunas especies requieren diferentes tipos de alojamientos, por lo que es importante proporcionar un entorno que se ajuste a sus necesidades en cada etapa de su vida.</p>

      <p><strong>Humedad:</strong> Los coleópteros pueden necesitar diferentes niveles de humedad dependiendo de su especie. Algunas especies requieren ambientes secos, mientras que otras prefieren ambientes más húmedos, por lo que es fundamental ajustar el nivel de humedad del hábitat según la especie.</p>
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
