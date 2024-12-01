import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup; 
  showPassword: boolean = false; 

  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private router: Router
  ) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Email con validación
      password: ['', [Validators.required, Validators.minLength(3)]], // Contraseña con validación
    });
  }

  ngOnInit(): void {


  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Enviar el formulario
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Datos del formulario:', this.loginForm.value);

      this._authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('OK', response);

          // Guardar token y usuario si el login fue exitoso
          this._authService.setToken(response.token);
          this._authService.setUser(response.user);

          // Navegar a la página principal
          this.router.navigate(['app/page/home']);
        },
        error: (error) => {
          console.error('ERROR', error);
          alert('Inicio de sesión fallido. Verifica tus credenciales.');
        },
      });
    } else {
      console.log('Formulario inválido');
    }
  }
}
