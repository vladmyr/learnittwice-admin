import * as url from "url";

import Base from "./base";
import Util from "../helpers/Util";

export const id = "Test";

const Test = Base.extend({
  urlRoot: Util.Model.getUrlRoot(id)
});

export default Test;