import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guidesphasmatodea',
  templateUrl: './guidesphasmatodea.component.html',
  styleUrls: ['./guidesphasmatodea.component.css']
})
export class GuidesphasmatodeaComponent implements OnInit {
  guide1 = {
    isOpen: false,
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

  guide2 = {
    isOpen: false,
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

  guide3 = {
    isOpen: false,
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
