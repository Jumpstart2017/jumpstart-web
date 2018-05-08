import { auth } from './firebase.js';

// Sign Up
export const doCreateUser = (firstName, lastName, email, password) =>
  auth.createUser(firstName, lastName, email, password);

// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>
  auth.login(email, password);

// Sign out
export const doSignOut = () =>
    auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
  auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
  auth.currentUser.updatePassword(password);