import { ToastContainer } from "react-toastify";
import Home from "./components/Home";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Home />
    </>
  );
}

export default App;
