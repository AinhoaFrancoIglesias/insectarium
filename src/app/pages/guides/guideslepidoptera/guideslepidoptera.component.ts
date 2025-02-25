import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Componente que gestiona las guías sobre el cuidado de lepidópteros, proporcionando información específica sobre
 * mariposas diurnas y polillas nocturnas, sus necesidades de alimentación, y el ambiente adecuado para su desarrollo.
 * 
 * @component
 * 
 * Este componente proporciona dos guías detalladas relacionadas con el cuidado de las mariposas y polillas. Los
 * usuarios pueden abrir o cerrar cada guía para obtener información sobre su entorno, su alimentación y sus
 * requerimientos específicos.
 */
@Component({
  selector: 'app-guideslepidoptera',  // Selector para utilizar el componente en HTML
  templateUrl: './guideslepidoptera.component.html',  // Archivo HTML asociado al componente
  styleUrls: ['./guideslepidoptera.component.css']  // Archivo de estilos CSS asociado al componente
})
export class GuideslepidopteraComponent implements OnInit {

  // Guía 1 sobre el cuidado de las mariposas diurnas
  guide1 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Las mariposas diurnas son insectos fascinantes. Para cuidarlas, debes asegurarte de ofrecerles un entorno adecuado que simule su hábitat natural. La alimentación debe incluir néctar de flores y, en algunos casos, vegetales de hoja verde. Las mariposas diurnas también necesitan un lugar para descansar y posarse durante el día.</p>
    `
  };

  // Guía 2 sobre el cuidado de las polillas nocturnas
  guide2 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Las polillas nocturnas tienen comportamientos similares a las mariposas, pero requieren cuidados específicos para su entorno nocturno. Necesitan un lugar oscuro y tranquilo donde puedan descansar durante el día. Su alimentación también incluye néctar, pero algunas especies prefieren frutas maduras. Asegúrate de mantener una temperatura adecuada y no demasiado brillante en su espacio.</p>
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
    }
  }
}
