import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import HowDoYouFeel from '../PageOne/PageOne';
import Understanding from '../PageTwo/PageTwo';

function App() {

  return (
    <div className='App'>
      <Header />
      {/* Router file tree below */}
      <Router>
        <div>
          <ul>
            <li>Links would go here, but not today, Jr.</li> {/** to remove later */}
          </ul>
          <hr />
          {/* Page one set to Home page, consider separate home page */}
          <Route exact path="/">
            Page 1 of 4 <HowDoYouFeel />
          </Route>
          <Route exact path="/understand">
            Page 2 of <Understanding />
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
