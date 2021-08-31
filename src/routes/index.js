import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Player, Home, Comments} from '../screens'

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/widget" component={Player} />
      <Route exact path="/comments" component={Comments} />
    </Switch>
  )
}

export default MainRoutes;