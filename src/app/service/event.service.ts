import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Event } from 'src/model/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseUrl = environment.apiUrl + '/event';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.baseUrl);
  }

  save(event: Event): Observable<Event>{
    return this.http.post<Event>(this.baseUrl, event);
  }

}