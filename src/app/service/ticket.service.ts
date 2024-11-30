import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TicketService {  baseUrl = environment.apiUrl + '/ticket';

  show: boolean = false

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  getAllByEvent(eventId: string){
    return this.http.get(this.baseUrl + '/event/' + eventId);
  }

  createAll(amount: number, ticket: any){
    return this.http.post(this.baseUrl + '/event/' + amount, ticket);
  }

}
