import Home from "./pages/Home";
import WebDev from "./pages/WebDev";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from "react";
import ScrollToTop from "./ScrollToTop";
import Photography from "./pages/Photography";
import UIUXDesigns from "./pages/UIUXDesigns";
import GraphicDesigns from "./pages/GraphicDesigns";
import VideoProjects from "./pages/VideoProjects";
import AppDev from "./pages/AppDev";

function App() {
  return (
    <Router>
      <Switch>
        <Fragment>
          <Route exact path="/">
            <Home />
          </Route>
          <ScrollToTop />
          <Route exact path="/webdev">
            <WebDev />
          </Route>
          <ScrollToTop />
          <Route exact path="/appdev">
            <AppDev />
          </Route>
          <ScrollToTop />
          {/* <Route exact path="/photography">
            <Photography />
          </Route>
          <ScrollToTop />
          <Route exact path="/uiux-design">
            <UIUXDesigns />
          </Route>
          <ScrollToTop />
          <Route exact path="/graphic-design">
            <GraphicDesigns />
          </Route>
          <ScrollToTop /> */}
          <Route exact path="/video-projects">
            <VideoProjects />
          </Route>
        </Fragment>
      </Switch>
    </Router>
  );
}

export default App;
