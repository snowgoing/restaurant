import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';



// Layout
import App from 'layouts/app';

// Components
import Home from "ui/home";
import Menu from "ui/menu-container";
import Reservation from "ui/reservation";
import OurStory from "ui/ourStory";


render(
  <Router history={browserHistory}>
    <Route component={App}>
    	<Route path="/" component={OurStory} />
    	<Route path="/menu-container" component={Menu} />
    	<Route path="/reservation" component={Reservation} />
    	<Route path="/ourStory" component={OurStory} />   
    </Route>
  </Router>
,document.getElementById('app'));