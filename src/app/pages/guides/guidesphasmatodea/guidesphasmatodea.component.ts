import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Componente que gestiona las guías sobre el cuidado de los fásmidos, conocidos como insectos palo,
 * proporcionando información sobre su ambiente, alimentación y cuidados necesarios para mantenerlos saludables.
 * 
 * @component
 * 
 * Este componente ofrece tres guías esenciales para el cuidado de los fásmidos. Los usuarios pueden abrir o cerrar
 * cada guía para aprender sobre su entorno, dieta y cómo mantenerlos en cautiverio de manera adecuada.
 */
@Component({
  selector: 'app-guidesphasmatodea',  // Selector para utilizar el componente en HTML
  templateUrl: './guidesphasmatodea.component.html',  // Archivo HTML asociado al componente
  styleUrls: ['./guidesphasmatodea.component.css']  // Archivo de estilos CSS asociado al componente
})
export class GuidesphasmatodeaComponent implements OnInit {

  // Guía 1 sobre cuidados generales para los fásmidos
  guide1 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Los fásmidos, conocidos también como insectos palo, son insectos fascinantes que requieren cuidados específicos para mantenerse saludables. Aquí te enseñamos todo lo que necesitas saber para mantener a tus fásmidos en el mejor estado posible:</p>
      <p>Algunos puntos clave sobre su cuidado:</p>
      <ul>
        <li>Proporciona un espacio adecuado con ramas y hojas para que se puedan camuflar.</li>
        <li>Evita ambientes húmedos en exceso; la mayoría de los fásmidos prefieren ambientes secos.</li>
        <li>Asegúrate de alimentarlos con hojas frescas y asegúrate de que las plantas no hayan sido tratadas con pesticidas.</li>
        <li>Mantén una temperatura ambiente cálida para fomentar su actividad y crecimiento.</li>
      </ul>
    `
  };

  // Guía 2 sobre la alimentación de los fásmidos
  guide2 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Los fásmidos son herbívoros, por lo que deben ser alimentados con hojas frescas. Algunas de las mejores opciones de alimentos incluyen:</p>
      <ul>
        <li>Hojas de rosal</li>
        <li>Hojas de laurel</li>
        <li>Hojas de frambuesa</li>
        <li>Hojas de eucalipto (si la especie lo permite)</li>
      </ul>
      <p>Es importante variar su dieta, y asegurarse de que las hojas estén frescas y libres de pesticidas. Además, asegúrate de proporcionarles suficiente agua mediante la humedad del ambiente, ya que no deben ser alimentados directamente con agua.</p>
    `
  };

  // Guía 3 sobre el entorno y el terrario de los fásmidos
  guide3 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>El hábitat de tus fásmidos debe imitar lo más posible su entorno natural. Aquí te mostramos cómo configurar el enclosure perfecto:</p>
      <ul>
        <li>Usa un terrario alto, ya que estos insectos trepan mucho y necesitan espacio vertical.</li>
        <li>Asegúrate de que el terrario tenga una buena ventilación, pero evita corrientes de aire directo.</li>
        <li>Introduce ramas, hojas secas y plantas para que tus fásmidos puedan camuflarse y alimentarse de ellas.</li>
        <li>Mantén la temperatura entre 20-25°C y la humedad relativa entre 40-60%.</li>
      </ul>
      <p>Recuerda limpiar el terrario periódicamente y cambiar las hojas viejas para evitar que se acumulen hongos o bacterias.</p>
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
