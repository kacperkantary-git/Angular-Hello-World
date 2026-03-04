import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [FormsModule], 
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