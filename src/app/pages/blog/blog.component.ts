import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  noticia1 = {
    isOpen: false,
    content: `
      <div class="noticia-content">
        <p>
          Al comparar las especies de agua dulce de los arroyos no contaminados con aquellas de los arroyos altamente contaminados, 
          los investigadores encontraron que la biodiversidad de invertebrados de los arroyos contaminados de Europa se redujo en un 
          <strong>42%</strong>. Mientras tanto, en Australia, la biodiversidad de agua dulce disminuyó en un <strong>27%</strong> 
          entre los arroyos limpios y contaminados.
        </p>
        <p>
          La contaminación por pesticidas afectó mucho más a ciertos grupos de invertebrados como las efímeras, las libélulas, 
          moscas de las piedras y las neurópteras. Dichas especies no han desaparecido todas necesariamente, pero sí que se ha 
          visto disminuir su presencia. Aunque muchas de las especies diezmadas no son muy conocidas por el público en general, 
          juegan un papel importante en la cadena alimenticia, incluyendo el de presa para las aves y los peces.
        </p>
        <p>
          Según los científicos, cabe destacar que la normativa vigente en Europa no es lo suficientemente fuerte para proteger 
          a estas especies. Descubrieron que incluso en los lugares contaminados que cumplían las regulaciones de la UE, 
          la biodiversidad había disminuido. Esto señala una creciente controversia sobre los controles adecuados y la evaluación 
          de los riesgos de los pesticidas antes de que sean puestos en manos del público.
        </p>
        <div style="text-align: center; margin-top: 15px;">
          <a href="https://es.mongabay.com/2013/08/los-pesticidas-estan-diezmando-la-poblacion-de-libelulas-y-otros-insectos-acuaticos/" 
             target="_blank" class="noticia-button">
            Seguir leyendo
          </a>
        </div>
      </div>
    `
  };
  
  

  noticia2 = {
    isOpen: false,
    content: `
      <p>
        Se ha observado una disminución drástica de las poblaciones de abejas en todo el mundo, lo que está afectando la polinización de muchas plantas y cultivos. Esto podría tener un impacto significativo en los ecosistemas y en la producción de alimentos...
      </p>
      <a href="https://www.nationalgeographic.com/environment/2022/03/decline-bees-global-impact/">Seguir leyendo</a>
    `
  };

  noticia3 = {
    isOpen: false,
    content: `
      <p>
        Investigaciones recientes han revelado que la contaminación del agua afecta gravemente a las especies de invertebrados acuáticos. A medida que los contaminantes se acumulan en los ecosistemas acuáticos, la biodiversidad y las cadenas alimenticias se ven alteradas...
      </p>
      <a href="https://www.msn.com/es-es/noticias/mundo/la-contaminaci%C3%B3n-del-agua-pone-en-peligro-la-biodiversidad/">Seguir leyendo</a>
    `
  };

  constructor() {}

  ngOnInit() {}

  toggleContent(noticiaId: number) {
    if (noticiaId === 1) {
      this.noticia1.isOpen = !this.noticia1.isOpen;
    } else if (noticiaId === 2) {
      this.noticia2.isOpen = !this.noticia2.isOpen;
    } else if (noticiaId === 3) {
      this.noticia3.isOpen = !this.noticia3.isOpen;
    }
  }
}
