/** @format */

import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1iLYtzpVk0EzCzhXdvKpZVfpiopkNpq0",
  authDomain: "portfolio-6f32b.firebaseapp.com",
  projectId: "portfolio-6f32b",
  storageBucket: "portfolio-6f32b.appspot.com",
  messagingSenderId: "914308797318",
  appId: "1:914308797318:web:1841c737d4937e94e8d207",
  measurementId: "G-TJ1ZMFEWB0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics, logEvent };
