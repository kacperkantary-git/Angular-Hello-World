import { Routes } from '@angular/router';
import { Counter } from './counter/counter';
import { Messages } from './messages/messages';
import { IpInfoComponent } from './ip-info/ip-info';

export const routes: Routes = [
  { path: '', redirectTo: 'counter', pathMatch: 'full' },
  { path: 'counter', component: Counter },
  { path: 'messages', component: Messages },
  { path: 'ip-info', component: IpInfoComponent }
];