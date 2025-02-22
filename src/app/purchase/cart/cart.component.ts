import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  // Lista de productos en el carrito
  carrito = [
    { nombre: 'Escondite de tubos', descripcion: 'Suministros para hábitat y alimentación', precio: 15.99, cantidad: 2, imagen: '/assets/z_hideout2.png' },
    { nombre: 'Bicho Palo Vietnamita', descripcion: 'Fásmidos', precio: 9.99, cantidad: 1, imagen: '/assets/phasm_palovietnamita.jpg' },
    { nombre: 'Mantis Flor Espinosa', descripcion: 'Mantis', precio: 17.99, cantidad: 2, imagen: '/assets/mantodea_spinyflower.jpeg' },
    { nombre: 'Hábitat', descripcion: 'Suministros para hábitat y alimentación', precio: 19.99, cantidad: 1, imagen: '/assets/enclosure2.jpg' },
    { nombre: 'Escondite de corcho', descripcion: 'Suministros para hábitat y alimentación', precio: 4.99, cantidad: 3, imagen: '/assets/z_hideout1.png' },
    { nombre: 'Polilla de la seda (9)', descripcion: 'Lepidópteros', precio: 3.99, cantidad: 2, imagen: '/assets/lepidoptera_polilladeseda.jpg' },
    { nombre: 'Lithobius forficatus', descripcion: 'Ciempiés', precio: 29.99, cantidad: 1, imagen: '/assets/chilopoda_lithobiusforficatus.jpg' },
    { nombre: 'Araña Cangrejo', descripcion: 'Arácnidos', precio: 23.99, cantidad: 1, imagen: '/assets/arachnida_arañacangrejo.jpg' }

  ];
  positionY: number = 0;  // Variable para controlar la posición Y del div

  // Función para incrementar la cantidad
  incrementarCantidad(item: any) {
    item.cantidad++;
  }

  // Función para decrementar la cantidad
  decrementarCantidad(item: any) {
    if (item.cantidad > 1) {
      item.cantidad--;
    }
  }

  // Función para eliminar el producto del carrito
  eliminarDelCarrito(item: any) {
    this.carrito = this.carrito.filter(producto => producto !== item);
  }

  // Función para calcular el precio total
  calcularPrecioTotal(): number {
    const total = this.carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    return Math.round(total * 100) / 100;  // Redondea a dos decimales
  }

  // Función para manejar la compra de todos los productos
  comprarTodo() {
    alert('Compra realizada con éxito!');
    this.carrito = [];  // Limpiar el carrito después de la compra
  }

  // Evento que se dispara cuando el usuario hace scroll en la página
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.positionY = scrollTop + 50;  // Aumentar la posición para que el div suba/baje con el scroll
  }
}