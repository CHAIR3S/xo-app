export interface Ticket {
    id:        number;
    code:      string;
    createdAt: Date;
    user:      null;
    status:    Status;
}

export interface Status {
    id:   number;
    name: Name;
}

export enum Name {
    Created = "CREATED",
    Redeemed = "REDEEMED",
    Blocked = "BLOCKED",
}
