import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Componente que gestiona las guías sobre los gasterópodos, proporcionando información sobre su biología,
 * alimentación y condiciones de vida en cautiverio.
 * 
 * @component
 * 
 * Este componente ofrece varias guías detalladas relacionadas con los gasterópodos, como sus características, 
 * su alimentación, y las condiciones necesarias para mantenerlos en cautiverio. Los usuarios pueden abrir o cerrar
 * cada guía al interactuar con ellas.
 */
@Component({
  selector: 'app-guidesgastropoda',  // Selector para utilizar el componente en HTML
  templateUrl: './guidesgastropoda.component.html',  // Archivo HTML asociado al componente
  styleUrls: ['./guidesgastropoda.component.css']  // Archivo de estilos CSS asociado al componente
})
export class GuidesgastropodaComponent implements OnInit {

  // Guía 1 sobre los gasterópodos y su biología
  guide1 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Los gasterópodos son un grupo de moluscos que incluyen caracoles y babosas. Se caracterizan por tener un cuerpo blando, una concha externa (en el caso de los caracoles) y una cabeza bien definida. Son herbívoros, carnívoros o detritívoros, dependiendo de la especie. Se encuentran en una variedad de hábitats, tanto terrestres como acuáticos.</p>
    `
  };

  // Guía 2 sobre la alimentación de los gasterópodos
  guide2 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Los gasterópodos suelen ser herbívoros, alimentándose de plantas, algas, y materia orgánica en descomposición. En el caso de las especies carnívoras, pueden alimentarse de otros invertebrados. Para su alimentación, puedes ofrecerles vegetales frescos como lechuga, pepino o zanahorias, o incluso alimentos especializados para caracoles si los tienes en cautiverio.</p>
    `
  };

  // Guía 3 sobre el alojamiento y las condiciones de vida de los gasterópodos
  guide3 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p><strong>Alojamiento:</strong> Los gasterópodos necesitan un entorno húmedo, ya que su cuerpo es sensible a la deshidratación. Asegúrate de proporcionar un sustrato adecuado como tierra, musgo o corteza, y un recipiente con buena ventilación. Si se trata de caracoles acuáticos, necesitarán un acuario con agua limpia y filtrada.</p>

      <p><strong>Humedad:</strong> Mantén el entorno de los gasterópodos húmedo, pero no excesivamente mojado. Asegúrate de que puedan acceder a agua fresca y a un lugar seco donde puedan refugiarse. En el caso de los caracoles terrestres, rocía su hábitat con agua para mantener la humedad adecuada.</p>
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
