import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Componente que gestiona las guías sobre el cuidado de las mantis, proporcionando información detallada sobre
 * sus necesidades de ambiente, alimentación y el mantenimiento adecuado de su hábitat en cautiverio.
 * 
 * @component
 * 
 * Este componente ofrece tres guías esenciales para el cuidado de las mantis. Los usuarios pueden abrir o cerrar
 * cada guía para aprender sobre su entorno, dieta y cuidados específicos.
 */
@Component({
  selector: 'app-guidesmantodea',  // Selector para utilizar el componente en HTML
  templateUrl: './guidesmantodea.component.html',  // Archivo HTML asociado al componente
  styleUrls: ['./guidesmantodea.component.css']  // Archivo de estilos CSS asociado al componente
})
export class GuidesmantodeaComponent implements OnInit {

  // Guía 1 sobre cuidados generales para las mantis
  guide1 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Las mantis son insectos fascinantes que requieren cuidados especiales para prosperar en cautiverio. Asegúrate de proporcionarles un entorno adecuado, un suministro constante de alimento y la humedad correcta para mantenerlas saludables.</p>
      <p>Algunos consejos clave para cuidar de tus mantis:</p>
      <ul>
        <li>Proporciona un ambiente cálido y húmedo.</li>
        <li>Evita el contacto con otros insectos para evitar el estrés.</li>
        <li>Asegúrate de tener suficiente espacio para que se muevan y trepen.</li>
        <li>Aliméntalas adecuadamente con insectos pequeños y suplementos de calcio.</li>
      </ul>
    `
  };

  // Guía 2 sobre la alimentación de las mantis
  guide2 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Las mantis son carnívoras y necesitan una dieta basada en insectos vivos. Algunas de las mejores opciones para alimentarlas incluyen:</p>
      <ul>
        <li>Cucarachas pequeñas</li>
        <li>Grillos</li>
        <li>Lepidópteros y otros insectos pequeños que se puedan capturar fácilmente.</li>
      </ul>
      <p>Asegúrate de proporcionar alimentos del tamaño adecuado para tu mantis, ya que los insectos demasiado grandes pueden ser difíciles de capturar o incluso peligrosos.</p>
      <p>Recuerda no sobrealimentarlas; una alimentación equilibrada es crucial para su bienestar.</p>
    `
  };

  // Guía 3 sobre el entorno y el terrario para las mantis
  guide3 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>El entorno en el que vivirá tu mantis es crucial para su bienestar. Algunas recomendaciones incluyen:</p>
      <ul>
        <li>Utiliza un terrario con suficiente altura para que pueda trepar.</li>
        <li>El tamaño mínimo del terrario depende de la especie, pero en general, debe ser lo suficientemente grande como para permitirle moverse y realizar sus actividades naturales.</li>
        <li>Asegúrate de que el terrario tenga una buena ventilación y que no haya corrientes de aire.</li>
        <li>Coloca ramas y plantas dentro del terrario para simular su entorno natural y permitirles esconderse o descansar.</li>
      </ul>
      <p>También es importante mantener el nivel de humedad adecuado. La mayoría de las mantis prefieren una humedad relativa entre el 50% y el 80%, dependiendo de la especie.</p>
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
   * @param guideNumber El número de la guía a mostrar u ocultar.
   */
  toggleContent(guideNumber: number): void {
    if (guideNumber === 1) {
      this.guide1.isOpen = !this.guide1.isOpen;  // Cambia el estado de visibilidad de la guía 1
    } else if (guideNumber === 2) {
      this.guide2.isOpen = !this.guide2.isOpen;  // Cambia el estado de visibilidad de la guía 2
    } else if (guideNumber === 3) {
      this.guide3.isOpen = !this.guide3.isOpen;  // Cambia el estado de visibilidad de la guía 3
    }
  }
}
