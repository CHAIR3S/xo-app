import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-card-primary',
  templateUrl: './card-primary.component.html',
  styleUrls: ['./card-primary.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class CardPrimaryComponent  implements OnInit {
  @Input({required: true}) day = '';
  @Input({required: true}) month = 'UPCOMING'
  @Input() type = 'Event';
  @Input() name = 'UPCOMING..';
  @Input() participants = 0;
  @Input() image: string = '' 
  @Input() size = 'lg'
  @Input() imageFormat = 'jpeg'

  constructor() {
   }

  ngOnInit() {}

}
