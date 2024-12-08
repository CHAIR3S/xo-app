import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { ImageHeaderComponent } from '../image-header/image-header.component';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom, of, switchMap } from 'rxjs';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';
import { CardPrimaryComponent } from '../card-primary/card-primary.component';
import { SoonEventComponent } from '../soon-event/soon-event.component';


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
  imports: [CommonModule, FormsModule, ImageHeaderComponent, IonicModule, SoonEventComponent]
})
export class ProfilePage implements OnInit {

  @Output() typeEvent = new EventEmitter<string>();

  user: any = null;

  username: any;

  metrics: any = null;

  type: string = 'future';

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
  

  future(){

    this.type = 'future';

    this.typeEvent.emit(this.type);

  }

  past(){
    
    this.type = 'past'
    this.typeEvent.emit(this.type);

  }



}
