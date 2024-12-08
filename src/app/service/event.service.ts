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

  events: any = [];

  baseUrl = environment.apiUrl + '/event';

  constructor(private http: HttpClient) { }

  getAll(){
    this.events =  this.http.get(this.baseUrl);
    return this.events;
  }

  getById(id: string){
    return this.http.get(this.baseUrl + '/' + id)
  }

  save(event: Event): Observable<Event>{
    return this.http.post<Event>(this.baseUrl, event);
  }

  getEventRelation(userId: number, eventId: string) {
    const body = { userId, eventId }; 
    return this.http.post(this.baseUrl + '/event-user', body, { responseType: 'text' });
  }




  getPastEventsByCreator(creatorId: number) {
    return this.http.get(`${this.baseUrl}/creator/${creatorId}/past`);
  }

  getFutureEventsByCreator(creatorId: number){
    return this.http.get(`${this.baseUrl}/creator/${creatorId}/future`);
  }

  getPastRegisteredEvents(userId: number){
    return this.http.get(`${this.baseUrl}/user/${userId}/registered/past`);
  }

  getFutureRegisteredEvents(userId: number){
    return this.http.get(`${this.baseUrl}/user/${userId}/registered/future`);
  }
}