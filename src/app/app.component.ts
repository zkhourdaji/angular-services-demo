import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  messages: string[];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messages = this.messageService.messages;
  }
}
