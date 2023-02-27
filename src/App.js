import { useState } from "react";
import SecretInfo from "./components/SecretInfo.jsx";
import Login from "./components/Login.jsx";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>{isLoggedIn ? <SecretInfo /> : <Login setIsLoggedIn={setIsLoggedIn} />}</>
  );
}

export default App;
