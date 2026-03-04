import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { Messages } from './messages/messages';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Counter, Messages], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hello-world');
}