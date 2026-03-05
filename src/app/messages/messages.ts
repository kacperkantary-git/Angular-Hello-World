import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './messages.html',
  styleUrl: './messages.css'
})
export class Messages {
  messages: string[] = [];
  newMessage: string = '';

  addMessage(message: string): void {
    if (message.trim()) {
      this.messages.push(message);
      this.newMessage = '';
    }
  }
}