import React from 'react';
import {
  HashRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import IndexPage from './routes/IndexPage';
import MyMessage from './routes/Message';
import MyForum from './routes/Forum';
import MySearch from './routes/Search';
import Person from './routes/Person/myperson';
import MyConnect from './routes/myconnect';
import ChangeMessage from './routes/Person/changeMessage';
import ModifyMessage from './routes/ModifyMessage';
import MobileEditor from './routes/testEditor';
import DetailTalk from './routes/DetailTalk';
import UploadDevice from './routes/UploadDevice';
import BorrowDevice from './routes/BorrowDevice';
import MyOrder from './routes/MyOrder';
import MyDevice from './routes/MyDevice';
import SearchResult from './routes/Searchresult';
import Home from './routes/Home';

class Layout extends React.Component {
  render() {
    return (
        <Switch>
          <IndexPage>
            <Route path="/app/:pageIndex/forum" exact component={MyForum} />
            {/* <Route path="/app/:pageIndex/notice" component={MyMessage} /> */}
            <Route path="/app/:pageIndex/search" component={MySearch} />
            <Route path="/app/:pageIndex/me" component={Person} />
            <Route path="/app/:pageIndex/home" component={Home} />
          </IndexPage>
        </Switch>
    );
  }
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/app" component={Layout} />
        <Route path="/uploadDevice" component={UploadDevice} />
        <Route path="/myDevice" component={MyDevice} />
        <Route path="/myorder" component={MyOrder} />
        <Route path="/myconnect" component={MyConnect} />
        <Route path="/borrowDevice" component={BorrowDevice} />
        <Route path="/plus" component={MobileEditor} />
        <Route path="/change" component={ChangeMessage} />
        <Route path="/searchresult/:search" component={SearchResult} />
        <Route path="/changevalue/:type/:value?" component={ModifyMessage} />
        <Route path="/detail/:talkingId" component={DetailTalk} />
        <Redirect path="/" to={{ pathname: '/app/0/home' }} />
      </Switch>
    </Router>
  );
}

export default App;
