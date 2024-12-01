import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-card-primary',
  templateUrl: './card-primary.component.html',
  styleUrls: ['./card-primary.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class CardPrimaryComponent  implements OnInit {
  @Input({required: true}) event: any
  @Input({required: true}) day = '';
  @Input({required: true}) month = 'UPCOMING'
  @Input() type = 'Event';
  @Input() name = 'UPCOMING..';
  @Input() participants = 0;
  @Input() image: string = '' 
  @Input() size = 'lg'
  @Input() imageFormat = 'jpeg'
  @Input({required: true}) id = ''; 

  constructor(private router: Router,
    private _eventService: EventService
  ) {
   }

  ngOnInit() {}

  onSubmit(){
    this._eventService.event = this.event

    this.router.navigate(['/app/page/event', this.id]);
  }

}
