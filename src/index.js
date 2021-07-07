import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./header";
import Home from "./home";
import Allotments from "./allotments";
import Users from "./users";
import Waiting from "./waiting";
// import ReportPDF from "./components/reportpdf";
// import ReportGenerate from "./components/reportgenerate";
import Notfound from "./404";

//routing to allow linking to other pages in the web app via their chosen urls

const Router = () => (
  <BrowserRouter>
  <div>
  <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/allotments" component={Allotments} />
      <Route path="/users" component={Users} />
      <Route path="/waiting" component={Waiting} />
      <Route component={Notfound} />
    </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);
