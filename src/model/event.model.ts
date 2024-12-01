export interface Event {
    id:               string;
    name:             string;
    description:      string;
    date:             Date;
    startTime:        string;
    endTime:          string;
    location:         string;
    maxGuests:        number;
    theme:            string;
    cover:            Cover;
    ticketPrice:      string;
    allowPhotoUpload: boolean;
    securityOptions:  SecurityOptions;
    contactInfo:      string;
    createdAt:        Date;
    updatedAt:        Date;
}

export interface Cover {
    type: string;
    data: number[];
}

export interface SecurityOptions {
    requiresID:     boolean;
    metalDetectors: boolean;
}


export class EventClass implements Event {
    id: string;
    name: string;
    description: string;
    date: Date;
    startTime: string;
    endTime: string;
    location: string;
    maxGuests: number;
    theme: string;
    cover: Cover;
    ticketPrice: string;
    allowPhotoUpload: boolean;
    securityOptions: SecurityOptions;
    contactInfo: string;
    createdAt: Date;
    updatedAt: Date;
  
    constructor(event: Partial<Event>) {
      this.id = event.id || '';
      this.name = event.name || '';
      this.description = event.description || '';
      this.date = event.date || new Date();
      this.startTime = event.startTime || '';
      this.endTime = event.endTime || '';
      this.location = event.location || '';
      this.maxGuests = event.maxGuests || 0;
      this.theme = event.theme || '';
      this.cover = event.cover || { type: '', data: [] };
      this.ticketPrice = event.ticketPrice || '';
      this.allowPhotoUpload = event.allowPhotoUpload || false;
      this.securityOptions = event.securityOptions || {
        requiresID: false,
        metalDetectors: false,
      };
      this.contactInfo = event.contactInfo || '';
      this.createdAt = event.createdAt || new Date();
      this.updatedAt = event.updatedAt || new Date();
    }
  }
  