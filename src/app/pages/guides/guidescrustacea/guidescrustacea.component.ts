import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Componente que gestiona las guías sobre los crustáceos, proporcionando información sobre su biología,
 * alimentación, y alojamiento en cautiverio.
 * 
 * @component
 * 
 * Este componente ofrece varias guías detalladas relacionadas con los crustáceos, como sus características, 
 * sus hábitos alimenticios, y las condiciones necesarias para mantenerlos en cautiverio. Los usuarios pueden abrir o cerrar
 * cada guía al interactuar con ellas.
 */
@Component({
  selector: 'app-guidescrustacea',  // Selector para utilizar el componente en HTML
  templateUrl: './guidescrustacea.component.html',  // Archivo HTML asociado al componente
  styleUrls: ['./guidescrustacea.component.css']  // Archivo de estilos CSS asociado al componente
})
export class GuidescrustaceaComponent implements OnInit {

  // Guía 1 sobre los crustáceos y su biología
  guide1 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Los crustáceos son una clase de artrópodos que incluyen a animales como camarones, cangrejos, langostas y percebes. Se encuentran principalmente en ambientes acuáticos, tanto marinos como de agua dulce, y son conocidos por su exoesqueleto duro, que les proporciona protección. Los crustáceos juegan un papel vital en los ecosistemas acuáticos, tanto como descomponedores como presas para otros animales.</p>
    `
  };

  // Guía 2 sobre la alimentación de los crustáceos
  guide2 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Los crustáceos son principalmente omnívoros, aunque algunas especies son carnívoras o herbívoras. Se alimentan de una variedad de fuentes, incluyendo algas, peces muertos, invertebrados pequeños y materia orgánica en descomposición. Asegúrate de proporcionar una dieta variada y adecuada según la especie específica que estés cuidando.</p>
    `
  };

  // Guía 3 sobre el alojamiento y las condiciones de vida de los crustáceos
  guide3 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p><strong>Alojamiento:</strong> Los crustáceos requieren un hábitat que simule sus condiciones naturales. Para los crustáceos marinos, esto incluye agua salada y un entorno acuático adecuado, mientras que los crustáceos de agua dulce necesitan agua dulce y temperaturas moderadas. Los espacios deben tener suficiente superficie para trepar, esconderse y explorar. Asegúrate de proporcionar escondites y áreas de sombra, ya que muchos crustáceos prefieren estar protegidos.</p>

      <p><strong>Humedad:</strong> Los crustáceos marinos requieren un ambiente con alta humedad, ya que se deshidratan rápidamente en condiciones secas. Los crustáceos de agua dulce necesitan mantener un nivel constante de humedad en su hábitat acuático. Asegúrate de que el hábitat tenga una buena circulación de agua y que el nivel de humedad se ajuste a la especie.</p>
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
