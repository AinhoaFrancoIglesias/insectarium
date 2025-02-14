import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guidesisopoda',
  templateUrl: './guidesisopoda.component.html',
  styleUrls: ['./guidesisopoda.component.css']
})
export class GuidesisopodaComponent implements OnInit {
  guide1 = {
    isOpen: false,
    content: `
      <p>El equilibrio entre no demasiada y no poca humedad es esencial para mantener a tus isópodos saludables. Un nivel de humedad entre el 60% y el 80% es adecuado para la mayoría de las especies. Usa un humidificador o pulveriza agua en el terrario de vez en cuando para mantener este nivel.</p>
    `
  };

  guide2 = {
    isOpen: false,
    content: `
      <p>Los isópodos se alimentan principalmente de materia orgánica en descomposición, como hojas, madera o frutas. Puedes ofrecerles restos de verduras o frutas, pero asegúrate de que no estén en mal estado. También puedes añadir calcio en polvo para ayudar en el proceso de muda.</p>
    `
  };

  guide3 = {
    isOpen: false,
    content: `
      <p>Un hábitat adecuado para tus isópodos debe ser oscuro, húmedo y bien ventilado. Además, los colémbolos pueden ser aliados útiles para mantener el ambiente limpio al consumir restos orgánicos no ingeridos por los isópodos.</p>
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

  toggleContent(guideId: number): void {
    if (guideId === 1) {
      this.guide1.isOpen = !this.guide1.isOpen;
    } else if (guideId === 2) {
      this.guide2.isOpen = !this.guide2.isOpen;
    } else if (guideId === 3) {
      this.guide3.isOpen = !this.guide3.isOpen;
    }
  }
}
