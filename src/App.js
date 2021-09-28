import "./App.css";
import NavMenu from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReferBar from "./components/ReferBar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        {/* <ReferBar /> */}
        <NavMenu />
        <Footer />
        <Switch>
          <Route path="/" exact />
          {/* <Route path="/Contact" component={Footer} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
