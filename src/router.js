import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import Home from './routes/Home';
import ArticleEdit from './routes/ArticleEdit';
import CanvasStudy from './routes/CanvasStudy';
// import ArticleDetails from './routes/ArticleDetails'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Redirect from="/Home" to="/"></Redirect>
        <Route path="/articleEdit" component={ArticleEdit}/>
        {/* <Route path="/details" component={ArticleDetails}/> */}
        <Route path="/canvas" component={CanvasStudy}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
