import { Component } from '@angular/core';

@Component({
  selector: 'app-guidescrustacea',
  templateUrl: './guidescrustacea.component.html',
  styleUrls: ['./guidescrustacea.component.css']
})
export class GuidescrustaceaComponent {
  guide1 = {
    isOpen: false,
    content: `
      <p>Los crustáceos son una clase de artrópodos que incluyen a animales como camarones, cangrejos, langostas y percebes. Se encuentran principalmente en ambientes acuáticos, tanto marinos como de agua dulce, y son conocidos por su exoesqueleto duro, que les proporciona protección. Los crustáceos juegan un papel vital en los ecosistemas acuáticos, tanto como descomponedores como presas para otros animales.</p>
    `
  };

  guide2 = {
    isOpen: false,
    content: `
      <p>Los crustáceos son principalmente omnívoros, aunque algunas especies son carnívoras o herbívoras. Se alimentan de una variedad de fuentes, incluyendo algas, peces muertos, invertebrados pequeños y materia orgánica en descomposición. Asegúrate de proporcionar una dieta variada y adecuada según la especie específica que estés cuidando.</p>
    `
  };

  guide3 = {
    isOpen: false,
    content: `
      <p><strong>Alojamiento:</strong> Los crustáceos requieren un hábitat que simule sus condiciones naturales. Para los crustáceos marinos, esto incluye agua salada y un entorno acuático adecuado, mientras que los crustáceos de agua dulce necesitan agua dulce y temperaturas moderadas. Los espacios deben tener suficiente superficie para trepar, esconderse y explorar. Asegúrate de proporcionar escondites y áreas de sombra, ya que muchos crustáceos prefieren estar protegidos.</p>

      <p><strong>Humedad:</strong> Los crustáceos marinos requieren un ambiente con alta humedad, ya que se deshidratan rápidamente en condiciones secas. Los crustáceos de agua dulce necesitan mantener un nivel constante de humedad en su hábitat acuático. Asegúrate de que el hábitat tenga una buena circulación de agua y que el nivel de humedad se ajuste a la especie.</p>
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
