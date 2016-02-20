import * as url from "url";
import Base from "./base";

import * as config from "../config.json";

const Test = Base.extend({
  urlRoot: url.resolve(Base.urlRoot, config.backbone.models)
});

export default Test;
export const id = "Test";