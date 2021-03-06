import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Pictures from './pages/pictures/Pictures';
import Contact from './pages/contact/Contact';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false
    };
  }

  toggleNav = () => {
    console.log(this.state.isOpen)
    this.setState({isOpen: !this.state.isOpen});
  }

  closeNav = () => {
    this.setState({isOpen: false});
  }

  render() {
    return (
      <div className="App container-fluid">
        <Header isOpen={this.state.isOpen} toggleNav={this.toggleNav} />

          <Switch>
            <Route exact path="/"   render={() => <Home closeNav={this.closeNav} />} />
            <Route path="/about"    render={() => <About />} />
            <Route path="/pictures" render={() => <Pictures />} />
            <Route path="/contact"  render={() => <Contact />} />
            <Redirect to="/" />
          </Switch>

        <Footer closeNav={this.closeNav}/>
      </div>
    );
  }
}

export default App;
