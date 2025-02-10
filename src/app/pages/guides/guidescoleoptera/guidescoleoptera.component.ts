import { Component } from '@angular/core';

@Component({
  selector: 'app-guidescoleoptera',
  templateUrl: './guidescoleoptera.component.html',
  styleUrls: ['./guidescoleoptera.component.css']
})
export class GuidescoleopteraComponent {
  guide1 = {
    isOpen: false,
    content: `
      <p>Los coleópteros son el orden de insectos más grande, con más de 400.000 especies descritas. Son conocidos por sus alas duras y su capacidad para volar. Suelen tener una alta diversidad en sus hábitos y hábitats, encontrándose en casi todos los ecosistemas del planeta. Los coleópteros son esenciales en el control de plagas y en la descomposición de materia orgánica.</p>
    `
  };

  guide2 = {
    isOpen: false,
    content: `
      <p><strong>Alimentación:</strong> Los coleópteros pueden ser herbívoros, carnívoros o descomponedores. Algunos se alimentan de hojas, flores, madera en descomposición, o incluso de insectos más pequeños. El tipo de dieta depende de la especie, por lo que es importante investigar las necesidades alimenticias de la especie en particular.</p>
    `
  };

  guide3 = {
    isOpen: false,
    content: `
      <p><strong>Alojamiento:</strong> La mayoría de los coleópteros requieren un hábitat adecuado para su desarrollo, que incluya refugios, humedad adecuada y suficiente espacio. Los adultos y las larvas de algunas especies requieren diferentes tipos de alojamientos, por lo que es importante proporcionar un entorno que se ajuste a sus necesidades en cada etapa de su vida.</p>

      <p><strong>Humedad:</strong> Los coleópteros pueden necesitar diferentes niveles de humedad dependiendo de su especie. Algunas especies requieren ambientes secos, mientras que otras prefieren ambientes más húmedos, por lo que es fundamental ajustar el nivel de humedad del hábitat según la especie.</p>
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
