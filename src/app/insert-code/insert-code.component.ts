import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { TicketService } from '../service/ticket.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-insert-code',
  templateUrl: './insert-code.component.html',
  styleUrls: ['./insert-code.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class InsertCodeComponent  implements OnInit {
  createEventForm!: FormGroup;
  user: any;

  @Input() eventId: string = '';
  @Input() userId: number = 0;

  constructor(private fb: FormBuilder,
    private ticketService: TicketService
  ) {

    this.createEventForm = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnInit() {


  }


  async onSubmit() {
    if (this.createEventForm.valid) {
      const formData = this.createEventForm.value;
      formData.userId = this.userId;
      formData.statusId = 2;
      formData.code = formData.code.toUpperCase();
      formData.eventId = this.eventId;
      console.log('Formulario enviado:', formData);

      const ticketUpdated = await firstValueFrom(this.ticketService.updateByCode(formData));
      console.log(ticketUpdated);
      
    } else {
      console.log('Formulario inválido');
    }
  }

}
