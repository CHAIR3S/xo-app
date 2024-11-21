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
  imports: [IonicModule, CommonModule, FormsModule],
})
export class HomePage implements OnInit {
  calendarIcon = calendar;
  searchIcon = search;
  gridIcon = grid;
  menuIcon = menu;
  chevronDownIcon = chevronDown;

  previousScrollPosition = 0;
  isHeaderVisible = true;
  isBottomNavVisible = true;
  showFilters = false; // Estado para mostrar u ocultar los filtros

  constructor() {}

  ngOnInit() {}

  // Manejar el evento de scroll
  onScroll(event: any) {
    const currentScrollPosition = event.detail.scrollTop;

    // Detectar si el scroll es hacia abajo o hacia arriba
    if (currentScrollPosition > this.previousScrollPosition) {
      // Scroll hacia abajo
      this.isHeaderVisible = false;
      this.isBottomNavVisible = false;
    } else {
      // Scroll hacia arriba
      this.isHeaderVisible = true;
      this.isBottomNavVisible = true;
    }

    this.previousScrollPosition = currentScrollPosition;
  }

  // Alternar visibilidad de filtros
  toggleFilters() {
    this.showFilters = !this.showFilters;
    console.log('Filters toggled:', this.showFilters);
  }
}
