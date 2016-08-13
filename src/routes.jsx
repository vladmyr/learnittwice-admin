import React from "react";
import {Route} from "react-router";

import {App} from "./components/app/App";
import {TestContainer} from "./components/test/Test";
import {StudyInbox} from './components/StudyInbox/StudyInbox.jsx';

const routes = <Route component={App}>
  <Route path="/test-test" component={TestContainer} />
  <Route path="/test" component={TestContainer} />
  <Route path="/inboxes" component={StudyInbox} />
  <Route path="/" component={TestContainer} />
</Route>;

export default routes;
