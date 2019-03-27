import React, { Component } from 'react';
import Home from './components/Home';

import Login from './Login';
import MainRouter from './components/MainRouter';


class App extends Component {
  render() {
    
      var localrole=localStorage.getItem("IsLogined");
      switch(localrole){
        case "yes":{return <div className="App"><MainRouter /></div> }
        
        default:{return <div className="App"><Login /></div>}
      }
    
  }
}

export default App;
