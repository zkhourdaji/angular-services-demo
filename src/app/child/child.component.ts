import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent {

  constructor(private messageService: MessageService) { }

  sendMessage() {
    this.messageService.send('Hello from Child component');
  }
}
