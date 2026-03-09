import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SendContactRequestComponent } from './send-contact-request';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from '../firebase.config';

describe('SendContactRequestComponent', () => {
  let component: SendContactRequestComponent;
  let fixture: ComponentFixture<SendContactRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendContactRequestComponent],
      providers: [
        provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideFirestore(() => getFirestore())
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SendContactRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});