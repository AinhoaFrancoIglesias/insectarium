import { Component } from '@angular/core';

@Component({
  selector: 'app-guidesdiplopoda',
  templateUrl: './guidesdiplopoda.component.html',
  styleUrls: ['./guidesdiplopoda.component.css']
})
export class GuidesdiplopodaComponent {
  guide1 = {
    isOpen: false,
    content: `
      <p>Los milpiés son artrópodos pertenecientes al orden Diplopoda. Se caracterizan por tener un cuerpo segmentado con dos pares de patas por segmento. A diferencia de los ciempiés, los milpiés son herbívoros y se alimentan principalmente de materia vegetal en descomposición. Son conocidos por su habilidad para enrollarse en espiral cuando se sienten amenazados, lo que les proporciona protección.</p>
    `
  };

  guide2 = {
    isOpen: false,
    content: `
      <p>Los milpiés son principalmente herbívoros, alimentándose de hojas, madera en descomposición, y otras materias orgánicas. También pueden comer hongos y restos de plantas muertas. Es importante ofrecerles un ambiente húmedo y sombreado, ya que prefieren lugares frescos y con alta humedad. Mantén su hábitat libre de alimentos procesados y pesticidas.</p>
    `
  };

  guide3 = {
    isOpen: false,
    content: `
      <p><strong>Alojamiento:</strong> Los milpiés necesitan un entorno húmedo y fresco. Un recipiente adecuado debe tener suficiente sustrato húmedo como tierra o musgo para que puedan enterrarse. Asegúrate de proporcionar escondites como trozos de madera o corteza para que puedan refugiarse. Los milpiés también necesitan un espacio bien ventilado.</p>

      <p><strong>Humedad:</strong> La humedad es esencial para la salud de los milpiés, ya que su piel es permeable al agua y pueden deshidratarse rápidamente. Mantén su entorno húmedo, pero no empapado, y asegúrate de que tengan acceso a agua fresca en todo momento.</p>
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
