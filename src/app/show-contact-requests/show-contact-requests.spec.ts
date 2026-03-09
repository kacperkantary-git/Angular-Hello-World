import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowContactRequestsComponent } from './show-contact-requests';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { firebaseConfig } from '../firebase.config';

describe('ShowContactRequestsComponent', () => {
  let component: ShowContactRequestsComponent;
  let fixture: ComponentFixture<ShowContactRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowContactRequestsComponent],
      providers: [
        provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideFirestore(() => getFirestore())
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowContactRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});