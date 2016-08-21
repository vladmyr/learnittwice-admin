import React from "react";

import App from "src/components/App/App";
import { StudyInboxContainer } from 'src/components/StudyInbox/StudyInbox.jsx';

//const routes = <Route component={App}>
//  <Route path="/test-test" component={TestContainer} />
//  <Route path="/test" component={TestContainer} />
//  <Route path="/inboxes" component={StudyInbox} />
//  <Route path="/" component={TestContainer} />
//</Route>;

const routes = {
  path: '/',
  component: App,
  indexRoute: {
    component: App
  },
  childRoutes: [{
    path: 'inbox',
    component: StudyInboxContainer
  }]
};

export default routes;
