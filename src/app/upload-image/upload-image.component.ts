import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
  standalone: true,
  imports: [IonIcon]
})
export class UploadImageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
