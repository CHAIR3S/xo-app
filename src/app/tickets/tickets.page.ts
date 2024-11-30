import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/angular/standalone';
import { ImageHeaderComponent } from "../image-header/image-header.component";
import { TicketCardComponent } from '../ticket-card/ticket-card.component';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { TicketService } from '../service/ticket.service';
import { firstValueFrom, of, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss'],
  standalone: true,
  imports: [IonIcon, IonContent, CommonModule, FormsModule, TicketCardComponent]
})
export class TicketsPage implements OnInit {
  show = false;
  eventId: any;
  tickets: any = [];
  
  constructor(private ticketService: TicketService,
    private route: ActivatedRoute
  ){}

  async ngOnInit() {
    // const response = await firstValueFrom(this.ticketService.createAll(15, ticket));

    // console.log(response);


    this.route.paramMap.pipe(
      switchMap(params => {
        const eventId = params.get('event-id'); // Obtenemos el eventId como string
        if (eventId) {
          // Llamamos al servicio con el eventId como string
          return this.ticketService.getAllByEvent(eventId);
        } else {
          // Si no hay event-id, retornamos un observable vacío
          return of([]); // `of` genera un observable con un array vacío
        }
      })
    ).subscribe({
      next: tickets => {
        this.tickets = tickets; // Asignamos los tickets obtenidos
        console.log('Tickets:', tickets); // Imprimimos los tickets
      },
      error: err => {
        console.error('Error fetching tickets:', err); // Manejo de errores
      },
    });
    

    console.log(this.tickets)
  }

}
