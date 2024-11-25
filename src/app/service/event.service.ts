import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseUrl = environment.apiUrl + '/event';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.baseUrl);
  }
}
