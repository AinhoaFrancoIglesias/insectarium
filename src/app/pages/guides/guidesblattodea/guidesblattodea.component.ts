import { Component } from '@angular/core';

@Component({
  selector: 'app-guidesblattodea',
  templateUrl: './guidesblattodea.component.html',
  styleUrl: './guidesblattodea.component.css'
})
export class GuidesblattodeaComponent {
  guide1 = {
    isOpen: false,
    content: 
      '<p>Las cucarachas son insectos pertenecientes al orden Blattodea. Son conocidos por su resistencia, ya que pueden sobrevivir en condiciones extremas, y por su habilidad para adaptarse rápidamente a distintos ambientes. Aunque a menudo se consideran plagas, las cucarachas juegan un papel importante en los ecosistemas, ayudando en la descomposición de materia orgánica.</p>'
  };
  
  guide2 = {
    isOpen: false,
    content: 
      '<p>Las cucarachas son omnívoras y pueden alimentarse de una amplia variedad de materiales orgánicos, incluidos restos de comida, madera, papel y materiales en descomposición. En cautiverio, es recomendable ofrecerles alimentos balanceados (frutas, verduras, y ocasionalmente proteínas). Mantén siempre su comida fresca y limpia para evitar la acumulación de bacterias.</p>'
  };
  

  guide3 = {
    isOpen: false,
    content: 
      '<p><strong>Alojamiento:</strong> Para mantener cucarachas en cautiverio, se necesita un espacio adecuado dependiendo de la especie. Un terrario con buen sistema de ventilación es esencial. Un tamaño adecuado es de aproximadamente 30×30 cm para un pequeño grupo. Además, es importante agregar elementos para trepar o esconderse, como troncos o cartón, según las necesidades específicas de la especie.</p>' +
      '<p><strong>Humedad:</strong> Las cucarachas prefieren ambientes con alta humedad. Mantén el sustrato ligeramente húmedo para que puedan mantenerse hidratadas, pero evita que se acumule agua estancada. Algunas especies también disfrutan de una ligera neblina de agua durante el día.</p>'
  };

  toggleContent(guideId: number) {
    if (guideId === 1) {
      this.guide1.isOpen = !this.guide1.isOpen;
    } else if (guideId === 2) {
      this.guide2.isOpen = !this.guide2.isOpen;
    } else if (guideId === 3) {
      this.guide3.isOpen = !this.guide3.isOpen;
    }
  }
}
