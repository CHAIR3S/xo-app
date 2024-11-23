import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { chevronDown, calendar, search, grid, menu } from 'ionicons/icons';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavbarComponent],
})
export class HomePage implements OnInit {
  chevronDownIcon = chevronDown;

  previousScrollPosition = 0;
  isHeaderVisible = true;
  isBottomNavVisible = true;
  showFilters = false; 

  constructor() {}

  ngOnInit() {}

  onScroll(event: any) {
    const currentScrollPosition = event.detail.scrollTop;

    if (currentScrollPosition > this.previousScrollPosition) {
      this.isHeaderVisible = false;
      this.isBottomNavVisible = false;
    } else {
      this.isHeaderVisible = true;
      this.isBottomNavVisible = true;
    }

    this.previousScrollPosition = currentScrollPosition;
  }

  toggleFilters() {
    this.showFilters = !this.showFilters;
    console.log('Filters toggled:', this.showFilters);
  }
}
