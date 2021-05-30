import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Banner from "./pages/Banner";
import About from "./pages/About"
import Projects from "./pages/Projects"
import TA from "./pages/TA"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Banner></Banner>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/ta">
            <TA></TA>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
