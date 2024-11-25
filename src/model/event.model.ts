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
