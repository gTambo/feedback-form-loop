import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <div>
          <ul>
            <li>Links would go here, but Not today, Jr.</li> {/** to remove later */}
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
