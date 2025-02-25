import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * Componente que gestiona las guías sobre los himenópteros, proporcionando información sobre su biología,
 * su alimentación y su alojamiento, incluyendo detalles sobre hormigas y abejas.
 * 
 * @component
 * 
 * Este componente ofrece varias guías detalladas relacionadas con los himenópteros, como sus hormigueros,
 * su alimentación y las condiciones necesarias para mantener abejas en cautiverio. Los usuarios pueden abrir o cerrar
 * cada guía al interactuar con ellas.
 */
@Component({
  selector: 'app-guideshymenoptera',  // Selector para utilizar el componente en HTML
  templateUrl: './guideshymenoptera.component.html',  // Archivo HTML asociado al componente
  styleUrls: ['./guideshymenoptera.component.css']  // Archivo de estilos CSS asociado al componente
})
export class GuideshymenopteraComponent implements OnInit {

  // Guía 1 sobre los hormigueros y cómo mantenerlos
  guide1 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Los hormigueros son estructuras sociales donde viven y se organizan las hormigas. Existen diferentes tipos de hormigueros dependiendo de la especie, como los que están construidos en tierra, en madera, o en hojas. Asegúrate de proporcionar un espacio adecuado para tus hormigas y un ambiente con temperaturas controladas. Además, es importante mantener el hormiguero limpio y observar el comportamiento de las hormigas para asegurar que prosperen.</p>
    `
  };

  // Guía 2 sobre la alimentación de las hormigas y abejas
  guide2 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>La alimentación de las hormigas varía según su especie. Generalmente, las hormigas se alimentan de azúcares, proteínas y grasas. Puedes ofrecerles azúcar líquida, frutas, semillas o pequeños insectos. Asegúrate de que el alimento sea apropiado para la especie que tienes. Las abejas, por otro lado, se alimentan principalmente de néctar y polen, por lo que necesitarás ofrecerles una fuente constante de estos recursos si las tienes en cautiverio.</p>
    `
  };

  // Guía 3 sobre cómo mantener abejas en cautiverio
  guide3 = {
    isOpen: false,  // Estado de visibilidad de la guía
    content: `
      <p>Las abejas son esenciales para la polinización de muchas plantas. Para crear el entorno perfecto para tus abejas, necesitarás un espacio que se asemeje a su hábitat natural, como una colmena. Asegúrate de proporcionar un suministro constante de néctar y polen, y cuida la salud de la colonia controlando la temperatura y la humedad dentro de la colmena.</p>
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
