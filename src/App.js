import "./App.css";
import NavMenu from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReferBar from "./components/ReferBar";

function App() {
  return (
    <>
      <Router>
        {/* <ReferBar /> */}
        <NavMenu />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
