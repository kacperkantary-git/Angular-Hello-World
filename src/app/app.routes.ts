import { Routes } from '@angular/router';
import { Counter } from './counter/counter';
import { Messages } from './messages/messages';


export const routes: Routes = [
  {path: '', redirectTo: 'counter', pathMatch: 'full'},
  { path: 'counter', component: Counter },
  { path: 'messages', component: Messages }
];
