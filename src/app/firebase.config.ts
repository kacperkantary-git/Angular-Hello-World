import { initializeApp, getApps, getApp } from 'firebase/app';

export const firebaseConfig = {
  apiKey: "AIzaSyCSdCfymRIWU2Nr0XCOdmVrwLGZTDUhxxc",
  authDomain: "hello-world-8355c.firebaseapp.com",
  projectId: "hello-world-8355c",
  storageBucket: "hello-world-8355c.firebasestorage.app",
  messagingSenderId: "687788789583",
  appId: "1:687788789583:web:badb41d653ca5362fd7f3a"
};

export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();