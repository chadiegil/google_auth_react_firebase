import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDe998-lHZs_xdxDJKVAUQPXHmTcu4LCg0",
  // apiKey: `${import.meta.env.API_KEY_FIREBASE}`,
  authDomain: "auth-4eaaf.firebaseapp.com",
  projectId: "auth-4eaaf",
  storageBucket: "auth-4eaaf.appspot.com",
  messagingSenderId: "855522644252",
  appId: "1:855522644252:web:3e1f25aa0273b28fb0ead9",
};

const app = initializeApp(firebaseConfig);

//user currently authenticated
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profile = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profile", profile);
    })
    .catch((error) => {
      console.log(error);
      console.log(import.meta.env.API_KEY_FIREBASEz);
    });
};
