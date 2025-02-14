import { initializeApp, getApp } from "@firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  collection,
  doc,
  addDoc,
  OrderByDirection,
  setDoc,
  updateDoc,
  QuerySnapshot,
  deleteDoc,
  collectionGroup,
  getDoc,
  getDocs,
  query,
  Query,
  arrayRemove,
  DocumentChange,
  where,
  orderBy,
  limit,
  startAfter,
  startAt,
  increment,
  onSnapshot,
  getFirestore,
  Timestamp,
  QueryDocumentSnapshot,
  DocumentData,
  FieldValue,
  WhereFilterOp,
  FieldPath,
  arrayUnion,
} from "@firebase/firestore";

import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  confirmPasswordReset,
  reauthenticateWithPopup,
  verifyPasswordResetCode,
  updateProfile,
  updateEmail,
  updatePassword,
  sendEmailVerification,
  verifyBeforeUpdateEmail,
  linkWithCredential,
  reauthenticateWithCredential,
  onAuthStateChanged,
  User,
  Unsubscribe,
  Auth,
  AuthProvider,
  EmailAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
} from "@firebase/auth";

import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from "@firebase/storage";

/** firebase creation
 * // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANTj-v_ZSgKhUFRLxEVdewgXEt0fEQ5HY",
  authDomain: "car-market-57380.firebaseapp.com",
  projectId: "car-market-57380",
  storageBucket: "car-market-57380.appspot.com",
  messagingSenderId: "614373920126",
  appId: "1:614373920126:web:a0134db81772fe87c7f72f",
  measurementId: "G-G41E59F0TM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 */

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  // authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_APP_FIREBASE_SENDER_ID,
  // appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
  
  apiKey: "AIzaSyANTj-v_ZSgKhUFRLxEVdewgXEt0fEQ5HY",
  authDomain: "car-market-57380.firebaseapp.com",
  projectId: "car-market-57380",
  storageBucket: "car-market-57380.appspot.com",
  messagingSenderId: "614373920126",
  appId: "1:614373920126:web:a0134db81772fe87c7f72f",
  measurementId: "G-G41E59F0TM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {
  app,
  analytics,
  initializeApp,
  getApp,
  storage,
  getStorage,
  ref,
  getDownloadURL,
  uploadBytes,
  deleteObject,
  auth,
  reauthenticateWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  confirmPasswordReset,
  verifyPasswordResetCode,
  updateProfile,
  updateEmail,
  updatePassword,
  sendEmailVerification,
  verifyBeforeUpdateEmail,
  linkWithCredential,
  reauthenticateWithCredential,
  onAuthStateChanged,
  type User,
  type Unsubscribe,
  type Auth,
  type AuthProvider,
  EmailAuthProvider,
  GoogleAuthProvider,
  OAuthProvider,
  signOut,
  db,
  collection,
  arrayRemove,
  doc,
  addDoc,
  type OrderByDirection,
  type WhereFilterOp,
  type Query,
  type QuerySnapshot,
  type QueryDocumentSnapshot,
  type DocumentData,
  type DocumentChange,
  setDoc,
  updateDoc,
  increment,
  deleteDoc,
  arrayUnion,
  getDoc,
  getDocs,
  collectionGroup,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  startAt,
  onSnapshot,
  Timestamp,
  FieldValue,
  FieldPath,
};