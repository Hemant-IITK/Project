import React, { Component } from 'react';
import './App.css';
import Login from './containers/Login/Login';
import Nav from './component/Nav/Nav';
import SearchFee from './containers/SearchFee/SearchFee';
import SearchLocation from './containers/SearchLocation/SearchLocation';
import SearchSpeciality from './containers/SearchSpeciality/SearchSpeciality';

class App extends Component {
  render() {
   
    return (
      <div className="App">
    
            <div className='Search'>
              <div className='SearchL'> 
                <SearchLocation />
              </div>
              <div className='SearchF'>
                <SearchFee />
              </div>
              <div className='SearchS'>
                <SearchSpeciality />
              </div>            
              <input type='text' placeholder='Name' className='Name'/>
              
            </div>
      </div>

    );
  }
}

export default App;
