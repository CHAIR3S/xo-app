import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  baseUrl = environment.apiUrl + '/auth';

  private readonly TOKEN_COOKIE = 'auth_token'; 
  private readonly USER_KEY = 'user'; 

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(this.baseUrl + '/login', credentials); 
  }

  setToken(token: string) {
    this.cookieService.set(this.TOKEN_COOKIE, token, {
      path: '/',
      secure: true,
      sameSite: 'Strict',
      expires: new Date(new Date().getTime() + 3600 * 1000), // Expira en 1 hora
    });
  }

  // Obtener token desde la cookie
  getToken(): string | null {
    return this.cookieService.get(this.TOKEN_COOKIE);
  }

  // Guardar usuario en LocalStorage
  setUser(user: any) {
    localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  // Obtener usuario desde LocalStorage
  getUser(): any {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  // Logout: Eliminar token y usuario
  logout() {
    this.cookieService.delete(this.TOKEN_COOKIE, '/');
    localStorage.removeItem(this.USER_KEY);
  }
}
