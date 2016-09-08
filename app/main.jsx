import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import AppContainers from './compontents/common/containers/AppContainers'
import Welcome from './compontents/common/compontents/Welcome'
import Login from './compontents/common/compontents/Login'
import './main.less'

const app = document.createElement('div')
document.body.appendChild(app)
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={AppContainers}>
      <IndexRoute component={Welcome} />
      <Route path="welcome" component={Welcome} />
      <Route path="login" component={Login} />
    </Route>
  </Router>,
  app)
