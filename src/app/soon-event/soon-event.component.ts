import { Component, Input, OnInit } from '@angular/core';
import { EventService } from '../service/event.service';
import { firstValueFrom, Observable } from 'rxjs';
import { CardPrimaryComponent } from '../card-primary/card-primary.component';
import { FormatDatePipe } from '../format-date.pipe';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-soon-event',
  templateUrl: './soon-event.component.html',
  styleUrls: ['./soon-event.component.scss'],
  standalone: true,
  imports: [CardPrimaryComponent, FormatDatePipe, CommonModule, IonicModule],
})
export class SoonEventComponent  implements OnInit {

  loading = true;
  soonLimit = 1; 
  assistancyLimit = 1;


  fut: boolean = false;
  pas: boolean = false;


  @Input() actionEvent!: Observable<string>;
  @Input() type: string = 'future';
  @Input({required: true}) user: any = null;

  soon: any = [];

  assistancy: any = [];

  created: any = [];

  past: any = [];

  constructor(
    private _eventService: EventService,
  ) { 

  }

  async ngOnInit() {


    this.actionEvent.subscribe((action: string) => {
      this.type = action;
      this.search(); 
    });

    this.search();

  }
  
  showMoreSoon() {
    this.soonLimit += 5;
  }


  showMoreAssistancy() {
    this.assistancyLimit += 5;
  }


  search(){

    console.log(this.type)

    if(this.type === 'future'){
      
      
      if(!this.fut){
        this.loading = true;


        if((this.user.role.name === 'CREATOR' || this.user.role.name === 'ADMIN') && this.user){
          // this.soon = await firstValueFrom(this._eventService.getFutureEventsByCreator(this.user.id));
    
          this._eventService.getFutureEventsByCreator(this.user.id).subscribe(response => {
            this.soon = response;
            console.log('future events',this.soon);
          })
          
          this.loading = false;

          this.fut = true;
        }
  
        this._eventService.getFutureRegisteredEvents(this.user.id).subscribe(resp => {
          this.assistancy = resp;
          console.log('futureTicket',resp);
    
          this.loading = false;
  
          this.fut = true;
        })
      }
    } else {

      if(!this.pas){

        this.loading = true;
  
        if((this.user.role.name === 'CREATOR' || this.user.role.name === 'ADMIN') && this.user){
          // this.soon = await firstValueFrom(this._eventService.getFutureEventsByCreator(this.user.id));
    
          this._eventService.getPastEventsByCreator(this.user.id).subscribe(response => {
            this.created = response;
            console.log('past events',response);
          })
          
          this.loading = false;
  
          this.pas = true;
        }
    
        this._eventService.getPastRegisteredEvents(this.user.id).subscribe(resp => {
          this.past = resp;
          console.log('pastTicket',resp);
    
          this.loading = false;
  
          this.pas = true;
  
        })
      } 


    }

  }

}
