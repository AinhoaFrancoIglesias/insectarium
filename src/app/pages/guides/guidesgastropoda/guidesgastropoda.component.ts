import { Component } from '@angular/core';

@Component({
  selector: 'app-guidesgastropoda',
  templateUrl: './guidesgastropoda.component.html',
  styleUrls: ['./guidesgastropoda.component.css']
})
export class GuidesgastropodaComponent {
  guide1 = {
    isOpen: false,
    content: `
      <p>Los gasterópodos son un grupo de moluscos que incluyen caracoles y babosas. Se caracterizan por tener un cuerpo blando, una concha externa (en el caso de los caracoles) y una cabeza bien definida. Son herbívoros, carnívoros o detritívoros, dependiendo de la especie. Se encuentran en una variedad de hábitats, tanto terrestres como acuáticos.</p>
    `
  };

  guide2 = {
    isOpen: false,
    content: `
      <p>Los gasterópodos suelen ser herbívoros, alimentándose de plantas, algas, y materia orgánica en descomposición. En el caso de las especies carnívoras, pueden alimentarse de otros invertebrados. Para su alimentación, puedes ofrecerles vegetales frescos como lechuga, pepino o zanahorias, o incluso alimentos especializados para caracoles si los tienes en cautiverio.</p>
    `
  };

  guide3 = {
    isOpen: false,
    content: `
      <p><strong>Alojamiento:</strong> Los gasterópodos necesitan un entorno húmedo, ya que su cuerpo es sensible a la deshidratación. Asegúrate de proporcionar un sustrato adecuado como tierra, musgo o corteza, y un recipiente con buena ventilación. Si se trata de caracoles acuáticos, necesitarán un acuario con agua limpia y filtrada.</p>

      <p><strong>Humedad:</strong> Mantén el entorno de los gasterópodos húmedo, pero no excesivamente mojado. Asegúrate de que puedan acceder a agua fresca y a un lugar seco donde puedan refugiarse. En el caso de los caracoles terrestres, rocía su hábitat con agua para mantener la humedad adecuada.</p>
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
