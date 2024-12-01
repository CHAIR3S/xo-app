import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Event, EventClass } from 'src/model/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  event: any = new EventClass({});

  baseUrl = environment.apiUrl + '/event';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.baseUrl);
  }

  getById(id: string){
    return this.http.get(this.baseUrl + '/' + id)
  }

  save(event: Event): Observable<Event>{
    return this.http.post<Event>(this.baseUrl, event);
  }

  getEventRelation(userId: number, eventId: string) {
    const body = { userId, eventId }; // Cuerpo de la solicitud
    return this.http.post(this.baseUrl + '/event-user', body, { responseType: 'text' });
  }

}