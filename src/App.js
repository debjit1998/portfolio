import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Switch>
        <Route component={Home} path="/" exact />
      </Switch>
    </>
  );
}

export default App;
