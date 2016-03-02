import * as Backbone from "backbone";
import Promised from "backbone-promised";
import { Promise } from "bluebird";

import Util from "../helpers/Util";

const Model = Util.Model.promisify(Backbone.Model);

export const id = "Base";

const Base = Model.extend({
  idAttribute: Util.Model.getIdAttribute(id),
  urlRoot: Util.Model.getUrlRoot(id)
});

export default Base;