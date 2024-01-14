import { useState } from "react";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Homepage />
      <Footer />
    </>
  );
}

export default App;
