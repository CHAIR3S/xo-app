import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
  templateUrl: './create-event.page.html',
  styleUrl: './create-event.page.scss'
})
export class CreateEventPage {
}