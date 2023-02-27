import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB87kTQODpojJD2JyxPb6vTI4Ucn5L5OHA",
  authDomain: "fb-jwt-br.firebaseapp.com",
  projectId: "fb-jwt-br",
  storageBucket: "fb-jwt-br.appspot.com",
  messagingSenderId: "742963870711",
  appId: "1:742963870711:web:c2edf2aa63bfc44b680cf2",
};

export default function Login({ setIsLoggedIn }) {
  const handleSignIn = () => {
    // connect to firebase project
    const app = initializeApp(firebaseConfig);
    // connect to Auth
    const auth = getAuth(app);
    // create a provider
    const provider = new GoogleAuthProvider();
    // popup signing window
    signInWithPopup(auth, provider)
      // handle .then and .catch
      .then(() => setIsLoggedIn(true))
      .catch(alert);
  };
  return (
    <>
      <h1>Login</h1>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </>
  );
}
