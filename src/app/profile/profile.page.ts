import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { ImageHeaderComponent } from '../image-header/image-header.component';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, of, switchMap } from 'rxjs';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';


export interface Metrics  {
  attendees: number,
  events: number,
  pictures: number
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ImageHeaderComponent, IonicModule]
})
export class ProfilePage implements OnInit {

  user: any = null;

  username: any;

  metrics: any = null;

  constructor(
    private route: ActivatedRoute,
    private _userService: UserService,
    private _authService: AuthService
  ) { }

  ngOnInit() {


    
    this.route.paramMap.pipe(
      switchMap(async params => {
        this.username = params.get('username');
        if (this.username) {
          return await firstValueFrom(this._userService.getByUsername(this.username));
        } else {
          return of(null); 
        }
      })
    ).subscribe({
      next: ({user, metrics}: any) => {
        if(user)
          this.user = user; 

        if(metrics){
          this.metrics = metrics;
        }

        
        console.log('User:', user); 
      },
      error: err => {
        console.error('Error fetching event:', err); 
      },
    });


  }

}
