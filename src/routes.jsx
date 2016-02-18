import React from "react";
import {Route} from "react-router";

import {App} from "./components/app/App";
import {Test} from "./components/test/Test";

export const routes = <Route component={App}>
  <Route path="/test-test" component={Test} />
  <Route path="/test" component={Test} />
  <Route path="/" component={Test} />
</Route>;