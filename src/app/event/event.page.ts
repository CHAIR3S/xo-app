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
import { first, firstValueFrom, of, switchMap } from 'rxjs';
import { Event } from 'src/model/event.model';
import { AuthService } from '../service/auth.service';
import { FormatDatePipe } from '../format-date.pipe';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
  standalone: true,
  imports: [IonIcon, IonContent, CommonModule, ImageHeaderComponent, InsertCodeComponent, CodeQrComponent, UploadImageComponent, FormatDatePipe]
})
export class EventPage implements OnInit {

  userId: number;

  relation: string = '';

  event: any;

  constructor(private _eventService: EventService,
    private _authService: AuthService,
    private route: ActivatedRoute
  ) { 
    this.event = _eventService.event;

    this.userId = _authService.getUser().id;
    
    



  }

  async ngOnInit() {
    console.log(this.event)

    if(!this.event.id){
      console.log('EVENTO NO HAY')

      this.route.paramMap.pipe(
        switchMap(async params => {
          const eventId = params.get('event-id'); 
          if (eventId) {
            
            return await firstValueFrom(this._eventService.getById(eventId));
          } else {
            
            return of(null); 
          }
        })
      ).subscribe({
        next: async (event: any) => {
          if(event){
            this.event = event; 
            this._eventService.event = event

            this.relation = (await firstValueFrom(this._eventService.getEventRelation(this.userId, this._eventService.event.id))).toString()

          }
          
          
          
          console.log('Event:', event); 
        },
        error: err => {
          console.error('Error fetching event:', err); 
        },
      });
    }else{
      
      this.relation = (await firstValueFrom(this._eventService.getEventRelation(this.userId, this._eventService.event.id))).toString();
    }



  }

}
