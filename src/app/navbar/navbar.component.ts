import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { calendar, search, grid, menu } from 'ionicons/icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class NavbarComponent  implements OnInit {


  calendarIcon = calendar;
  searchIcon = search;
  gridIcon = grid;
  menuIcon = menu;

  constructor() { }

  ngOnInit() {}

  link(){
    console.log('el trapero e traperos');
  }

}
