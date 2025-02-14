import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guideslepidoptera',
  templateUrl: './guideslepidoptera.component.html',
  styleUrls: ['./guideslepidoptera.component.css']
})
export class GuideslepidopteraComponent implements OnInit {
  guide1 = {
    isOpen: false,
    content: `
      <p>Las mariposas diurnas son insectos fascinantes. Para cuidarlas, debes asegurarte de ofrecerles un entorno adecuado que simule su hábitat natural. La alimentación debe incluir néctar de flores y, en algunos casos, vegetales de hoja verde. Las mariposas diurnas también necesitan un lugar para descansar y posarse durante el día.</p>
    `
  };

  guide2 = {
    isOpen: false,
    content: `
      <p>Las polillas nocturnas tienen comportamientos similares a las mariposas, pero requieren cuidados específicos para su entorno nocturno. Necesitan un lugar oscuro y tranquilo donde puedan descansar durante el día. Su alimentación también incluye néctar, pero algunas especies prefieren frutas maduras. Asegúrate de mantener una temperatura adecuada y no demasiado brillante en su espacio.</p>
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
      }
    });
  }

  toggleContent(guideId: number): void {
    if (guideId === 1) {
      this.guide1.isOpen = !this.guide1.isOpen;
    } else if (guideId === 2) {
      this.guide2.isOpen = !this.guide2.isOpen;
    }
  }
}
