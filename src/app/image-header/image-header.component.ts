import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-header',
  templateUrl: './image-header.component.html',
  styleUrls: ['./image-header.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ImageHeaderComponent  implements OnInit {
  @Input({required: true}) image64: string = '';
  @Input({required: true}) imageType: string = '';

  constructor() { }

  ngOnInit() {}

}
