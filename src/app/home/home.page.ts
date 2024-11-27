import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { chevronDown, calendar, search, grid, menu } from 'ionicons/icons';
import { NavbarComponent } from "../navbar/navbar.component";
import { EventService } from '../service/event.service';
import { firstValueFrom } from 'rxjs';
import { CardPrimaryComponent } from "../card-primary/card-primary.component";
import { FormatDatePipe } from '../format-date.pipe';
import {Event} from '../../model/event.model'
import { DropDownComponent } from '../drop-down/drop-down.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, CardPrimaryComponent, FormatDatePipe, DropDownComponent],
})
export class HomePage implements OnInit {
  chevronDownIcon = chevronDown;

  previousScrollPosition = 0;
  isHeaderVisible = true;
  isBottomNavVisible = true;
  showFilters = false; 
  events: any = [];

  constructor(
    private eventService: EventService,
  ) {}

  async ngOnInit() {
    console.log('consultando events')
    this.events = await firstValueFrom(this.eventService.getAll());
  
    console.log(this.events);

  }

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
