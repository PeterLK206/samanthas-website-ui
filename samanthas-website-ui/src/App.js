import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Header from './components/Header/Header';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Pictures from './pages/pictures/Pictures';
import Contact from './pages/contact/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/pictures" component={Pictures} />
            <Route path="/contact" component={Contact} />
            <Route component={Home} />
          </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
