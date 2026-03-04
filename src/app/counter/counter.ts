import { Component } from '@angular/core';
import { count } from 'console';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

count: number =3;

increment(){
  this.count++;
}



decrement(){
  this.count--;
}




}

