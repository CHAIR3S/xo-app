import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/angular/standalone';
import { ImageHeaderComponent } from "../image-header/image-header.component";

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss'],
  standalone: true,
  imports: [IonIcon, IonContent, CommonModule, FormsModule]
})
export class TicketsPage implements OnInit {

  show: boolean = false

  constructor() { }

  ngOnInit() {
  }

}
