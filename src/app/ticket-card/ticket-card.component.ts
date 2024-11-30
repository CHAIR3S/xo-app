import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TicketCardComponent  implements OnInit {
  @Input() image: string = '';
  @Input() name: string = 'No registrado';
  @Input() status: any = null;
  @Input() code: string = '';

  constructor() { }

  ngOnInit() {}

}
