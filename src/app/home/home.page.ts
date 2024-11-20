import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { calendar, search, grid, menu } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ]
})
export class HomePage implements OnInit {
  calendarIcon = calendar;
  searchIcon = search;
  gridIcon = grid;
  menuIcon = menu;

  constructor() { }

  ngOnInit() {
  }
}
