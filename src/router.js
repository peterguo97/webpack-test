import React from 'react';
import {
  HashRouter as Router, Switch, Route,
} from 'react-router-dom';
import MyMessage from './routes/Message';
import MyForum from './routes/Forum';
import MySearch from './routes/Search';
import Person from './routes/Person/myperson';
import ChangeMessage from './routes/Person/changeMessage';
import ModifyMessage from './routes/ModifyMessage';
import MobileEditor from './routes/testEditor';
import DetailTalk from './routes/DetailTalk';
import UploadDevice from './routes/UploadDevice';
import BorrowDevice from './routes/BorrowDevice';
import MyDevice from './routes/MyDevice';
import Home from './routes/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MyForum} />
        <Route path="/notice" component={MyMessage} />
        <Route path="/search" component={MySearch} />
        <Route path="/me" component={Person} />
        <Route path="/uploadDevice" component={UploadDevice} />
        <Route path="/myDevice" component={MyDevice} />
        <Route path="/borrowDevice" component={BorrowDevice} />
        <Route path="/plus" component={MobileEditor} />
        <Route path="/change" component={ChangeMessage} />
        <Route path="/changevalue/:type/:value" component={ModifyMessage} />
        <Route path="/detail/:talkingId" component={DetailTalk} />
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
