import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
  templateUrl: './create-event.page.html',
  styleUrl: './create-event.page.scss'
})
export class CreateEventPage {
  
  selectedImage: string | ArrayBuffer | null = null; // Almacena la imagen seleccionada

  // Manejar la selección de un archivo
  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result; // Asignar el contenido de la imagen al lector
      };
      reader.readAsDataURL(file); // Leer el archivo como una URL base64
    }
  }
}