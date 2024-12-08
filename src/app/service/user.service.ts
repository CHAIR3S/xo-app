import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = environment.apiUrl + '/user';

  constructor(private http: HttpClient) { }

  getByUsername(username: string){
    return this.http.get(this.baseUrl + '/username/' + username);
  }

}
