import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
})
export class ParentComponent {

  constructor(private messageService: MessageService) { }

  sendMessage() {
    this.messageService.send('Hello from Parent');
  }
}
