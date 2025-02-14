import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guidesmantodea',
  templateUrl: './guidesmantodea.component.html',
  styleUrls: ['./guidesmantodea.component.css']
})
export class GuidesmantodeaComponent implements OnInit {
  guide1 = {
    isOpen: false,
    content: `
      <p>Las mantis son insectos fascinantes que requieren cuidados especiales para prosperar en cautiverio. Asegúrate de proporcionarles un entorno adecuado, un suministro constante de alimento y la humedad correcta para mantenerlas saludables.</p>
      <p>Algunos consejos clave para cuidar de tus mantis:</p>
      <ul>
        <li>Proporciona un ambiente cálido y húmedo.</li>
        <li>Evita el contacto con otros insectos para evitar el estrés.</li>
        <li>Asegúrate de tener suficiente espacio para que se muevan y trepen.</li>
        <li>Aliméntalas adecuadamente con insectos pequeños y suplementos de calcio.</li>
      </ul>
    `
  };

  guide2 = {
    isOpen: false,
    content: `
      <p>Las mantis son carnívoras y necesitan una dieta basada en insectos vivos. Algunas de las mejores opciones para alimentarlas incluyen:</p>
      <ul>
        <li>Cucarachas pequeñas</li>
        <li>Grillos</li>
        <li>Lepidópteros y otros insectos pequeños que se puedan capturar fácilmente.</li>
      </ul>
      <p>Asegúrate de proporcionar alimentos del tamaño adecuado para tu mantis, ya que los insectos demasiado grandes pueden ser difíciles de capturar o incluso peligrosos.</p>
      <p>Recuerda no sobrealimentarlas; una alimentación equilibrada es crucial para su bienestar.</p>
    `
  };

  guide3 = {
    isOpen: false,
    content: `
      <p>El entorno en el que vivirá tu mantis es crucial para su bienestar. Algunas recomendaciones incluyen:</p>
      <ul>
        <li>Utiliza un terrario con suficiente altura para que pueda trepar.</li>
        <li>El tamaño mínimo del terrario depende de la especie, pero en general, debe ser lo suficientemente grande como para permitirle moverse y realizar sus actividades naturales.</li>
        <li>Asegúrate de que el terrario tenga una buena ventilación y que no haya corrientes de aire.</li>
        <li>Coloca ramas y plantas dentro del terrario para simular su entorno natural y permitirles esconderse o descansar.</li>
      </ul>
      <p>También es importante mantener el nivel de humedad adecuado. La mayoría de las mantis prefieren una humedad relativa entre el 50% y el 80%, dependiendo de la especie.</p>
    `
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Obtener el parámetro 'guide' desde la URL
    this.route.queryParams.subscribe(params => {
      const guideId = +params['guide'];
      if (guideId === 1) {
        this.guide1.isOpen = true;
      } else if (guideId === 2) {
        this.guide2.isOpen = true;
      } else if (guideId === 3) {
        this.guide3.isOpen = true;
      }
    });
  }

  toggleContent(guideNumber: number): void {
    if (guideNumber === 1) {
      this.guide1.isOpen = !this.guide1.isOpen;
    } else if (guideNumber === 2) {
      this.guide2.isOpen = !this.guide2.isOpen;
    } else if (guideNumber === 3) {
      this.guide3.isOpen = !this.guide3.isOpen;
    }
  }
}
