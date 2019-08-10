import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-grand-parent',
  templateUrl: './grand-parent.component.html'
})
export class GrandParentComponent {

  constructor(private messageService: MessageService) { }

  sendMessage() {
    this.messageService.send('Hello from Grand Parent');
  }
}
