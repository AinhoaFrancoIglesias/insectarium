import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  apiKey: string = environment.apiKey; 

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
      <div class="noticia-content">
        <p>
          Después de muchos años de trabajo, los científicos han calculado el estatus de unas <strong>77.000 especies</strong> de plantas 
          y animales en la Lista Roja de animales amenazados de la Unión Internacional para la Conservación de la Naturaleza (UICN). 
          Los datos científicos sobre la distribución y la abundancia de las especies a lo largo del tiempo permiten evaluar cuán cerca 
          está una especie al borde de la extinción. Pero a los científicos todavía les faltan los datos necesarios para estudiar las 
          <strong>1,5 millones de especies</strong> que existen, y mucho más aún los <strong>7 millones</strong> que aún falta por conocer.
        </p>
        <p>
          Resulta difícil que una especie pueda atraer atención o apoyo para su conservación si no se la clasifica en peligro de extinción. 
          Pero si no hay fondos, no se puede estudiar la información necesaria para ver cuál es el riesgo de una especie. Así que para superar 
          esta contradicción, algunos conservacionistas han estado aprovechándose de un recurso que no cuesta nada y que siempre ha estado 
          disponible: el <strong>voluntariado</strong>.
        </p>
        <p>
          Entre las multitudes del mercado de Lorengau en la Isla Manus, Papúa Nueva Guinea, existe mucho conocimiento — y en particular, 
          datos — que podría tomar meses y miles de dólares para compilar si estuviera a cargo de un equipo de investigación en una expedición 
          en la jungla. Nathan Whitmore, un biólogo enfocado en demografía con la organización Wildlife Conservation Society, estuvo con estas 
          comunidades locales para aprender de “la sabiduría de las multitudes” y para tener una idea sobre la abundancia y la distribución 
          del caracol Manus de árbol (<i>Papustyla pulcherrima</i>). Sus resultados fueron publicados recientemente en la revista Oryx.
        </p>
        <div style="text-align: center; margin-top: 15px;">
          <a href="https://es.mongabay.com/2015/10/estudiando-las-especies-poco-queridas-con-la-ayuda-de-proyectos-de-colaboracion-publica/">
            Seguir leyendo
          </a>
        </div>
      </div>
    `
  };

  noticia3 = {
    isOpen: false,
    content: `
      <p>
        Seguramente, el trabajo de los insectos del mundo llegue a tus labios cada día. El café o el té que saboreas lo han polinizado insectos. Las manzanas, las naranjas, los repollos, las cerezas, las zanahorias, el brócoli, la sandía, el ajo, la canela, la albahaca, las pipas de girasol, las almendras, el aceite de canola… todos son polinizados por los insectos. La miel, los colorantes e incluso algunas vacunas requieren que haya insectos para salir adelante.
      </p>
      <p>
        Son vitales para la red alimentaria del mundo, están alojados en el ciclo de nutrientes e integrados en la industria. Cuanto más los observamos, más vemos que los insectos son vitales para mantener las estructuras de la vida. En referencia a esto, el reconocido biólogo E.O. Wilson escribió en 1987: “Si los insectos desaparecieran, dudo que la especie humana dure más de unos meses”. Por eso, el precipitado declive de los insectos está causando alarma.
      </p>
      <p>
        Las poblaciones de insectos se están reduciendo a un ritmo diferente en el espacio y el tiempo, pero de media, se cree que el descenso en su abundancia es de alrededor de un 1-2 % al año, o un 10-20 % por década.
      </p>
      <a href="https://es.mongabay.com/2021/03/peligra-la-vida-en-la-tierra-a-causa-de-la-perdida-de-insectos/">Seguir leyendo</a>
    `
  };

  constructor() {}

  ngOnInit() {
    console.log('API Key:', this.apiKey); 
  }

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
