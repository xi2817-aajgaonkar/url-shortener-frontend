import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Shortener from "./Shortner";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// class App extends Component {
//   render() {
//     console.log("Host URL" + process.env.PUBLIC_URL);
//     return (
//       <Shortener />
//       // <Router basename={process.env.PUBLIC_URL}>
//       //   <div className="App">
//       //     <header className="App-header">
//       //       <img src={logo} className="App-logo" alt="logo" />
//       //       <h1 className="App-title">URL Shortner</h1>
//       //     </header>
//       //     <Switch>
//       //       <Route exact path="/" render={() => (
//       //         <Redirect to="/short-url" />
//       //       )} />
//       //       <Route exact path='/short-url' component={Shortener} />
//       //     </Switch>
//       //   </div>
//       // </Router>
//     );
//   }
// }
function App() {
  return (
    <Shortener />
    // <Router basename={process.env.PUBLIC_URL}>
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <h1 className="App-title">URL Shortner</h1>
    //     </header>
    //     <Switch>
    //       <Route exact path="/" render={() => (
    //         <Redirect to="/short-url" />
    //       )} />
    //       <Route exact path='/short-url' component={Shortener} />
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
