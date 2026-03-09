import { Routes } from '@angular/router';
import { Counter } from './counter/counter';
import { Messages } from './messages/messages';
import { IpInfoComponent } from './ip-info/ip-info';
import { SendContactRequestComponent } from './send-contact-request/send-contact-request';
import { ShowContactRequestsComponent } from './show-contact-requests/show-contact-requests';

export const routes: Routes = [
  { path: '', redirectTo: 'counter', pathMatch: 'full' },
  { path: 'counter', component: Counter },
  { path: 'messages', component: Messages },
  { path: 'ip-info', component: IpInfoComponent },
  { path: 'send-contact', component: SendContactRequestComponent },
  { path: 'show-contacts', component: ShowContactRequestsComponent }
];