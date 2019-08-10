import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    private _messages: string[] = [];

    get messages() {
        return this._messages;
    }

    send(message: string) {
        this._messages.push(message);
    }

    deleteAllMessages() {
        this._messages = [];
    }
}
