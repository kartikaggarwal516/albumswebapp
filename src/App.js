import React from 'react';
import './App.css';
import Home from "./Components/Home"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AlbumPics from './Components/AlbumPics';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router basename="albumswebapp">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:albumid" component={AlbumPics} />        
      </Switch>
    </Router>
  );
}

export default App;
