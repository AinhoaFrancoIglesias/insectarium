import { Component } from '@angular/core';

@Component({
  selector: 'app-guideschilopoda',
  templateUrl: './guideschilopoda.component.html',
  styleUrl: './guideschilopoda.component.css'
})
export class GuideschilopodaComponent {
  guide1 = {
    isOpen: false,
    content: `
<p>Los ciempiés son artrópodos pertenecientes al orden Chilopoda. Son conocidos por sus múltiples patas y su habilidad para moverse rápidamente. Se encuentran en diversos hábitats, desde bosques hasta áreas áridas, y son depredadores eficaces de otros insectos. Se diferencian de los milpiés (ambos son miriápodos) en que los ciempiés tienen un par de patas por segmento corporal, mientras que los milpiés tienen dos pares por segmento.</p>
    `
  };
  
  guide2 = {
    isOpen: false,
    content: `
      <p><strong>Alimentación:</strong> Los ciempiés deben alimentarse cada 3 días. Se recomienda ofrecerles presas vivas, como insectos pequeños, o presas pre-muertas. Las presas vivas deben ser más pequeñas que el tamaño del cuerpo del ciempiés, y deben ser consumidas en un plazo de 24 horas. Si las presas son pre-muertas, deben retirarse rápidamente para evitar la descomposición.</p>
    `
  };
  

  guide3 = {
    isOpen: false,
    content: `
      <p><strong>Alojamiento:</strong> El alojamiento debe ser adecuado para el tamaño y comportamiento del ciempiés. Para especies pequeñas, un espacio de unos 5×5 cm es suficiente, pero para especies más grandes puede ser necesario un espacio más grande y con suficiente ventilación. Además, se debe asegurar que el sustrato sea lo suficientemente húmedo para mantener la humedad ambiental adecuada.</p>
      
      <p><strong>Humedad:</strong> Los ciempiés necesitan un nivel de humedad moderado, pero nunca deben estar demasiado mojados. Mantén la mitad del sustrato ligeramente húmedo, especialmente para las crías que pueden deshidratarse rápidamente.</p>
    `
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
