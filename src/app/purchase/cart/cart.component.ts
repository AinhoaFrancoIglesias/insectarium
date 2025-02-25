import { Component, HostListener } from '@angular/core';

/**
 * Componente para gestionar el carrito de compras.
 * 
 * Este componente permite visualizar los productos en el carrito, así como realizar operaciones de
 * aumentar/decrementar la cantidad de productos, eliminar productos, calcular el precio total y
 * realizar la compra. Además, se tiene una función para hacer que el carrito se desplace con el scroll.
 */
@Component({
  selector: 'app-cart',  // Selector para este componente
  templateUrl: './cart.component.html',  // Plantilla HTML asociada al componente
  styleUrls: ['./cart.component.css']  // Estilos CSS asociados al componente
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

  /**
   * Incrementa la cantidad de un producto en el carrito.
   * 
   * @param item - El producto cuyo número de unidades se incrementa.
   */
  incrementarCantidad(item: any) {
    item.cantidad++;
  }

  /**
   * Decrementa la cantidad de un producto en el carrito.
   * 
   * @param item - El producto cuyo número de unidades se decrementa.
   */
  decrementarCantidad(item: any) {
    if (item.cantidad > 1) {
      item.cantidad--;
    }
  }

  /**
   * Elimina un producto del carrito.
   * 
   * @param item - El producto que se eliminará del carrito.
   */
  eliminarDelCarrito(item: any) {
    this.carrito = this.carrito.filter(producto => producto !== item);
  }

  /**
   * Calcula el precio total de los productos en el carrito.
   * 
   * @returns El precio total del carrito redondeado a dos decimales.
   */
  calcularPrecioTotal(): number {
    const total = this.carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
    return Math.round(total * 100) / 100;  // Redondea a dos decimales
  }

  /**
   * Realiza la compra de todos los productos en el carrito.
   * 
   * Limpia el carrito después de realizar la compra.
   */
  comprarTodo() {
    alert('Compra realizada con éxito!');
    this.carrito = [];  // Limpiar el carrito después de la compra
  }

  /**
   * Maneja el evento de scroll en la ventana para ajustar la posición Y del carrito.
   * 
   * @param event - El evento de scroll.
   */
  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.positionY = scrollTop + 50;  
  }
}
