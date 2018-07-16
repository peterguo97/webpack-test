import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import MyMessage from './routes/Message';
import MyForum from './routes/Forum';
import MySearch from './routes/Search';
import Person from './routes/Person/myperson';
import ChangeMessage from './routes/Person/changeMessage';
import ModifyMessage from './routes/ModifyMessage';
// import MobileEditor from './routes/testEditor';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/notice" component={MyMessage} />
        <Route path="/" exact component={MyForum} />
        <Route path="/search" component={MySearch} />
        <Route path="/me" component={Person} />
        {/* <Route path="/plus" component={MobileEditor} /> */}
        <Route path="/change" component={ChangeMessage} />
        <Route path="/changevalue/:type/:value" component={ModifyMessage} />
      </Switch>
    </Router>
  );
}

export default App;
