import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/angular/standalone';
import { ImageHeaderComponent } from '../image-header/image-header.component';
import { InsertCodeComponent } from '../insert-code/insert-code.component';

@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
  standalone: true,
  imports: [IonIcon, IonContent, CommonModule, ImageHeaderComponent, InsertCodeComponent]
})
export class EventPage implements OnInit {
  image: string = '../../assets/img/spoti-utopia.jpg';

  constructor() { }

  ngOnInit() {
  }

}
