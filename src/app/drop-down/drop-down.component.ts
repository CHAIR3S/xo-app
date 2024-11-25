import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class DropDownComponent  implements OnInit {
  @Input() classes = 'card-secondary text-white'

  isOpen = false; // Controla la visibilidad del dropdown
  options = ['Music', 'Technology', 'Art', 'Sports']; // Opciones del menú
  selectedOption = 'Art'; // Opción seleccionada por defecto



  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  
  // Alterna la visibilidad del menú
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  // Selecciona una opción y cierra el menú
  selectOption(option: string) {
    this.selectedOption = option;
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

}
