import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage4 from '../HomePage4'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import './App.css';


const App = () => { 

  return (
    <div className="App">
       <Router>
          <Switch>
            <Route path='/' component={Homepage4} />
            {/* <Route path='/home' component={Homepage} />
            <Route path='/home2' component={Homepage2} />
            <Route path='/home3' component={Homepage3} />
            <Route path='/home4' component={Homepage4} />
            <Route path='/Blog' component={BlogPage} />
            <Route path='/Blog-details' component={BlogDetailsPage} /> */}
          </Switch>
          <Footer/>
          <Scrollbar/>
      </Router>
      
    </div>
  );
}

export default App;
