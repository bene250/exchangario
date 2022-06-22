import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBj3dCxCxENwgMsEf9NlcJyc4wLSZTjYPA',
  authDomain: 'exchangario-e6e61.firebaseapp.com',
  projectId: 'exchangario-e6e61',
  storageBucket: 'exchangario-e6e61.appspot.com',
  messagingSenderId: '874292517711',
  appId: '1:874292517711:web:c334eb05595f2cf181c33a',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
