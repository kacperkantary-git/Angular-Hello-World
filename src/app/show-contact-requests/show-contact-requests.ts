import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../firebase.config';

interface ContactRequest {
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-show-contact-requests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-contact-requests.html',
  styleUrl: './show-contact-requests.css'
})
export class ShowContactRequestsComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  requests: ContactRequest[] = [];

  async ngOnInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      const db = getFirestore(app);
      const ref = collection(db, 'contactRequests');
      const snapshot = await getDocs(ref);
      this.requests = snapshot.docs.map(doc => doc.data() as ContactRequest);
    }
  }
}