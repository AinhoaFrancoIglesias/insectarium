import { Component } from '@angular/core';

@Component({
  selector: 'app-guideshymenoptera',
  templateUrl: './guideshymenoptera.component.html',
  styleUrls: ['./guideshymenoptera.component.css']
})
export class GuideshymenopteraComponent {
  guide1 = {
    isOpen: false,
    content: `
      <p>Los hormigueros son estructuras sociales donde viven y se organizan las hormigas. Existen diferentes tipos de hormigueros dependiendo de la especie, como los que están construidos en tierra, en madera, o en hojas. Asegúrate de proporcionar un espacio adecuado para tus hormigas y un ambiente con temperaturas controladas. Además, es importante mantener el hormiguero limpio y observar el comportamiento de las hormigas para asegurar que prosperen.</p>
    `
  };

  guide2 = {
    isOpen: false,
    content: `
      <p>La alimentación de las hormigas varía según su especie. Generalmente, las hormigas se alimentan de azúcares, proteínas y grasas. Puedes ofrecerles azúcar líquida, frutas, semillas o pequeños insectos. Asegúrate de que el alimento sea apropiado para la especie que tienes. Las abejas, por otro lado, se alimentan principalmente de néctar y polen, por lo que necesitarás ofrecerles una fuente constante de estos recursos si las tienes en cautiverio.</p>
    `
  };

  guide3 = {
    isOpen: false,
    content: `
      <p>Las abejas son esenciales para la polinización de muchas plantas. Para crear el entorno perfecto para tus abejas, necesitarás un espacio que se asemeje a su hábitat natural, como una colmena. Asegúrate de proporcionar un suministro constante de néctar y polen, y cuida la salud de la colonia controlando la temperatura y la humedad dentro de la colmena.</p>
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
