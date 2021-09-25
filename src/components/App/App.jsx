import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';

function App() {

  return (
    <div className='App'>
      
      <Router>
        <div>
          <Header />
          <ul>
            <li>Links would go here, but not today, Jr.</li> {/** to remove later */}
          </ul>
          <hr />
          <Route exact path="/">
            Home {/** <Home /> */}
          </Route>
          <Route exact path="/feel">
            Page One {/** <PageOne /> */}
          </Route>
          <Route exact path="/understand">
            Page Two {/** <PageTwo /> */}
          </Route>
          <Route exact path= "/supported">
            Page Three {/** <PageThree /> */}
          </Route>
          <Route exact path="/comment">
            Page Four {/** <PageFour /> */}
          </Route>
          <Route exact path="/review">
            Review and Submit {/** <ReviewSubmit /> */}
          </Route>
          <Route exact path="/reset">
            Success and Restart {/** <Reset /> */}
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
