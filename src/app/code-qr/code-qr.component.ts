import { Component, OnInit } from '@angular/core';
import { QrCodeModule } from 'ng-qrcode';

@Component({
  selector: 'app-code-qr',
  templateUrl: './code-qr.component.html',
  styleUrls: ['./code-qr.component.scss'],
  standalone: true,
  imports: [QrCodeModule]
})
export class CodeQrComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
