import { Model } from "backbone";

import Util from "../helpers/Util";

export const id = "Base";

const Base = Model.extend({
  idAttribute: Util.Model.getIdAttribute(id),
  urlRoot: Util.Model.getUrlRoot(id)
});

export default Base;
