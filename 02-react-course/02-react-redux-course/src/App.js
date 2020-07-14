import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./views/components/Navbar/Navbar";
import Home from "./views/pages/Home/Home";
import About from "./views/pages/About/About";
import Contact from "./views/pages/Contact/Contact";
import Article from "./views/components/Article/Article";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/posts/:post_id" component={Article} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
