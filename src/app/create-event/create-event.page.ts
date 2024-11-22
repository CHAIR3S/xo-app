import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
  template: `
    <ion-content class="ion-padding">
      <div class="max-w-2xl mx-auto space-y-8">
        <div class="space-y-2">
          <h1 class="text-2xl font-semibold">Crear Evento</h1>
          <p class="text-gray-400">Llena el formulario para continuar</p>
        </div>

        <form class="space-y-6">
          <!-- Basic Info -->
          <div class="space-y-4">
            <div class="space-y-2">
              <ion-label position="stacked">Nombre del evento</ion-label>
              <ion-input placeholder="Ej: Neon Party 2024" class="custom-input"></ion-input>
            </div>

            <div class="space-y-2">
              <ion-label position="stacked">Descripción (Opcional)</ion-label>
              <ion-textarea placeholder="Describe tu evento..." rows="4" class="custom-textarea"></ion-textarea>
            </div>
          </div>

          <!-- Date and Time -->
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <ion-label>Fecha</ion-label>
              <div class="relative">
                <ion-input type="date" class="custom-input pl-10"></ion-input>
                <ion-icon name="calendar" class="absolute left-3 top-2.5 h-5 w-5 text-gray-400"></ion-icon>
              </div>
            </div>
            <div class="space-y-2">
              <ion-label>Hora</ion-label>
              <div class="flex gap-2">
                <div class="relative flex-1">
                  <ion-input type="time" class="custom-input pl-10"></ion-input>
                  <ion-icon name="time" class="absolute left-3 top-2.5 h-5 w-5 text-gray-400"></ion-icon>
                </div>
                <div class="relative flex-1">
                  <ion-input type="time" class="custom-input pl-10"></ion-input>
                  <ion-icon name="time" class="absolute left-3 top-2.5 h-5 w-5 text-gray-400"></ion-icon>
                </div>
              </div>
            </div>
          </div>

          <!-- Location and Capacity -->
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <ion-label position="stacked">Ubicación</ion-label>
              <div class="relative">
                <ion-input placeholder="Dirección del evento" class="custom-input pl-10"></ion-input>
                <ion-icon name="location" class="absolute left-3 top-2.5 h-5 w-5 text-gray-400"></ion-icon>
              </div>
            </div>
            <div class="space-y-2">
              <ion-label position="stacked">Número de personas</ion-label>
              <div class="relative">
                <ion-input type="number" max="1000" placeholder="Máx. 1000" class="custom-input pl-10"></ion-input>
                <ion-icon name="people" class="absolute left-3 top-2.5 h-5 w-5 text-gray-400"></ion-icon>
              </div>
            </div>
          </div>

          <!-- Theme and Price -->
          <div class="grid gap-4 sm:grid-cols-2">
            <div class="space-y-2">
              <ion-label position="stacked">Temática / Código de vestimenta</ion-label>
              <ion-select placeholder="Seleccionar temática" class="custom-select">
                <ion-select-option value="casual">Casual</ion-select-option>
                <ion-select-option value="formal">Formal</ion-select-option>
                <ion-select-option value="neon">Neón</ion-select-option>
                <ion-select-option value="costume">Disfraz</ion-select-option>
              </ion-select>
            </div>
            <div class="space-y-2">
              <ion-label position="stacked">Costo del boleto</ion-label>
              <div class="relative">
                <ion-input type="number" placeholder="0.00" class="custom-input pl-10"></ion-input>
                <ion-icon name="cash" class="absolute left-3 top-2.5 h-5 w-5 text-gray-400"></ion-icon>
              </div>
            </div>
          </div>

          <!-- Cover Photo -->
          <div class="space-y-2">
            <ion-label>Foto de portada (Opcional)</ion-label>
            <div class="border-2 border-dashed border-gray-700 rounded-lg p-6 text-center">
              <ion-button fill="outline" class="custom-button">
                <ion-icon name="cloud-upload" slot="start"></ion-icon>
                Subir imagen
              </ion-button>
            </div>
          </div>

          <!-- Amenities -->
          <div class="space-y-3">
            <ion-label>Servicios disponibles</ion-label>
            <div class="grid gap-2 sm:grid-cols-2">
              <ion-item lines="none" class="custom-checkbox">
                <ion-checkbox slot="start"></ion-checkbox>
                <ion-label>Seguridad</ion-label>
              </ion-item>
              <ion-item lines="none" class="custom-checkbox">
                <ion-checkbox slot="start"></ion-checkbox>
                <ion-label>Equipo médico</ion-label>
              </ion-item>
              <ion-item lines="none" class="custom-checkbox">
                <ion-checkbox slot="start"></ion-checkbox>
                <ion-label>Alberca</ion-label>
              </ion-item>
              <ion-item lines="none" class="custom-checkbox">
                <ion-checkbox slot="start"></ion-checkbox>
                <ion-label>Venta de alcohol</ion-label>
              </ion-item>
              <ion-item lines="none" class="custom-checkbox">
                <ion-checkbox slot="start"></ion-checkbox>
                <ion-label>Venta de cigarros electrónicos</ion-label>
              </ion-item>
              <ion-item lines="none" class="custom-checkbox">
                <ion-checkbox slot="start"></ion-checkbox>
                <ion-label>Comida</ion-label>
              </ion-item>
            </div>
          </div>

          <!-- Additional Options -->
          <div class="space-y-4">
            <ion-item lines="none" class="custom-toggle">
              <ion-label>
                <h2>Visibilidad del evento</h2>
                <p>Hacer el evento visible para todos</p>
              </ion-label>
              <ion-toggle [(ngModel)]="isPublic" slot="end"></ion-toggle>
            </ion-item>
            <ion-item lines="none" class="custom-toggle">
              <ion-label>
                <h2>Permitir fotos de usuarios</h2>
                <p>Los asistentes podrán subir fotos</p>
              </ion-label>
              <ion-toggle slot="end"></ion-toggle>
            </ion-item>
          </div>

          <!-- Contact Info -->
          <div class="space-y-2">
            <ion-label position="stacked">Información de contacto para boletos</ion-label>
            <ion-textarea placeholder="Información de contacto para la venta de boletos..." rows="4" class="custom-textarea"></ion-textarea>
          </div>

          <ion-button expand="block" class="custom-button-large">
            Crear Evento
          </ion-button>
        </form>
      </div>
    </ion-content>
  `,
  styles: [`
    :host {
      --ion-background-color: #000000;
      --ion-text-color: #ffffff;
    }

    .custom-input,
    .custom-textarea,
    .custom-select {
      --background: #1f2937;
      --color: #ffffff;
      --placeholder-color: #9ca3af;
      --border-color: transparent;
      --padding-start: 1rem;
      --padding-end: 1rem;
      border-radius: 0.375rem;
    }

    .custom-checkbox {
      --background: transparent;
      --background-checked: #4f46e5;
      --border-color: #4b5563;
      --border-color-checked: #4f46e5;
      --checkmark-color: #ffffff;
    }

    .custom-toggle {
      --background: #1f2937;
      --background-checked: #4f46e5;
      --handle-background: #ffffff;
      --handle-background-checked: #ffffff;
    }

    .custom-button {
      --background: transparent;
      --background-hover: #374151;
      --color: #ffffff;
      --border-color: #4b5563;
      --border-style: solid;
      --border-width: 1px;
      --padding-start: 1rem;
      --padding-end: 1rem;
      --border-radius: 0.375rem;
    }

    .custom-button-large {
      --background: #4f46e5;
      --background-hover: #4338ca;
      --color: #ffffff;
      --border-radius: 0.375rem;
      margin-top: 1.5rem;
      height: 3rem;
    }

    ion-label, h1, h2, p {
      color: #ffffff;
    }

    .text-gray-400 {
      color: #9ca3af;
    }
  `]
})
export class CreateEventComponent {
  isPublic = true;
}