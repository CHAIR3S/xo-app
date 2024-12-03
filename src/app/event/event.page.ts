import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/angular/standalone';
import { ImageHeaderComponent } from '../image-header/image-header.component';
import { InsertCodeComponent } from '../insert-code/insert-code.component';
import { CodeQrComponent } from "../code-qr/code-qr.component";
import { UploadImageComponent } from '../upload-image/upload-image.component';
import { EventService } from '../service/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom, of, switchMap } from 'rxjs';
import { Event } from 'src/model/event.model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
  standalone: true,
  imports: [IonIcon, IonContent, CommonModule, ImageHeaderComponent, InsertCodeComponent, CodeQrComponent, UploadImageComponent]
})
export class EventPage implements OnInit {

  userId: number;

  relation: string = '';

  event: any;

  constructor(private _eventService: EventService,
    private _authService: AuthService
  ) { 
    this.event = _eventService.event;

    this.userId = _authService.getUser().id;
    
    
    // this.route.paramMap.pipe(
    //   switchMap(params => {
    //     const eventId = params.get('event-id'); // Obtenemos el eventId como string
    //     if (eventId) {
    //       // Llamamos al servicio con el eventId como string
    //       return this._eventService.getById(eventId)
    //     } else {
    //       // Si no hay event-id, retornamos un observable vacío
    //       return of(null); // `of` genera un observable con un array vacío
    //     }
    //   })
    // ).subscribe({
    //   next: event => {
    //     this.event = event; 
    //     console.log('Event:', event); 
    //   },
    //   error: err => {
    //     console.error('Error fetching event:', err); 
    //   },
    // });


  }

  async ngOnInit() {

    this.relation = (await firstValueFrom(this._eventService.getEventRelation(this.userId, this._eventService.event.id))).toString()

  }

}
