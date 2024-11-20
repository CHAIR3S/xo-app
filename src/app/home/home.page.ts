import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { chevronDown, calendar, search, grid, menu } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ]
})
export class HomePage implements OnInit {
  calendarIcon = calendar;
  searchIcon = search;
  gridIcon = grid;
  menuIcon = menu;
  chevronDownIcon = chevronDown;

  showFilters = false;
  showStickyFilters = false;

  constructor() {}

  ngOnInit() {}

  onScroll(event: any) {
    const yOffset = event.detail.scrollTop;
    this.showStickyFilters = yOffset > 100; // Mostrar filtros si se hace scroll hacia abajo más de 100px
    console.log(yOffset); // Debug para verificar el scroll
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
  }
}
