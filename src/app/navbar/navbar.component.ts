import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { calendar, search, grid, menu } from 'ionicons/icons';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class NavbarComponent  implements OnInit {

  username: string;

  calendarIcon = calendar;
  searchIcon = search;
  gridIcon = grid;
  menuIcon = menu;

  constructor(
    private _authService: AuthService
  ) {
      this.username = _authService.getUser().username;
   }

  ngOnInit() {}

}
