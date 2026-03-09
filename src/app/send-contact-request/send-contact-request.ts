import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../firebase.config';

@Component({
  selector: 'app-send-contact-request',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './send-contact-request.html',
  styleUrl: './send-contact-request.css'
})
export class SendContactRequestComponent {
  private fb = inject(FormBuilder);
  private platformId = inject(PLATFORM_ID);

  form: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  success = false;

  async send(): Promise<void> {
    if (this.form.valid && isPlatformBrowser(this.platformId)) {
      const db = getFirestore(app);
      const ref = collection(db, 'contactRequests');
      await addDoc(ref, this.form.value);
      this.form.reset();
      this.success = true;
    }
  }
}