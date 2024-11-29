import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventService } from '../service/event.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './create-event.page.html',
  styleUrl: './create-event.page.scss'
})
export class CreateEventPage {
  createEventForm: FormGroup; // Formulario reactivo
  selectedImageBase64: string | null = null; // Almacena solo la cadena base64
  selectedImageUrl: string | null = null; // Almacena la URL completa para previsualización
  selectedImageFormat: string | null = null; // Formato de la imagen (jpg, png, etc.)
  loading: boolean = false;
  servicesAvailable = [
    { id: 'requiresID', label: 'Requiere identificación', selected: false },
    { id: 'security', label: 'Seguridad', selected: false },
    { id: 'medical', label: 'Equipo médico', selected: false },
    { id: 'pool', label: 'Alberca', selected: false },
    { id: 'alcohol', label: 'Venta de alcohol', selected: false },
    { id: 'vape', label: 'Venta de cigarros electrónicos', selected: false },
    { id: 'food', label: 'Comida', selected: false },
  ];

  constructor(private fb: FormBuilder,
    private eventService: EventService,
    private router: Router
  ) {
    this.createEventForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      date: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      location: ['', Validators.required],
      maxGuests: ['', [Validators.required, Validators.min(1)]],
      theme: ['', Validators.required],
      ticketPrice: ['', [Validators.required, Validators.min(0)]],
      visibility: [true],
      allowPhotoUpload: [true],
      contactInfo: ['', Validators.required],
    });
  }

  // Manejar la selección de un archivo
  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selectedImageFormat = file.type.split('/')[1]; // Obtiene el formato de la imagen
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        this.selectedImageUrl = result; // Asigna la URL completa para previsualización
        this.selectedImageBase64 = result.split(',')[1]; // Extrae solo la cadena base64
      };
      reader.readAsDataURL(file); // Lee el archivo como Data URL
    }
  }

  // Manejar el envío del formulario
  onSubmit() {
    if (this.createEventForm.valid) {
      this.loading = true
      const formData = {
        ...this.createEventForm.value,
        cover: this.selectedImageBase64, // Imagen en base64 sin prefijo
        coverFormat: this.selectedImageFormat, // Formato de la imagen (jpg, png, etc.)
        services: this.getServicesAsJson()
      };

      // console.log('Datos del evento:', formData);

      formData.creatorId = 1;
      formData.visibilityId = formData.visibility ? 1 : 2

      try {
      const response = firstValueFrom(this.eventService.save(formData));

      this.goToTickets('benito');

      this.loading = false
      console.log(response);
    } catch (error) {

      this.loading = false
      console.log(error);

    }
      // Aquí puedes enviar `formData` a tu backend
    } else {
      console.log('Formulario inválido');
    }
  }

  toggleService(serviceId: string) {
    const service = this.servicesAvailable.find((s) => s.id === serviceId);
    if (service) {
      service.selected = !service.selected;
    }
  }


  getServicesAsJson() {
    return this.servicesAvailable
      .filter((service) => service.selected) // Filtra solo los seleccionados
      .reduce((acc, service) => {
        acc[service.id] = true; // Solo incluye los seleccionados
        return acc;
      }, {} as { [key: string]: boolean });
  }

  goToTickets(eventName: string) {
    this.router.navigate(['app/page/tickets/' + eventName ]);
  }

}