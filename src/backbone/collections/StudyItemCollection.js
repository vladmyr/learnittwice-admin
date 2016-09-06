'use strict';

import BaseCollection from './BaseCollection';
import Util from 'src/helpers/util/index';
import StudyItem from 'src/backbone/models/StudyItem';

const name = 'StudyItemCollection';
const StudyItemCollection = BaseCollection.extend(Util.Collection.postDeclaration({
  model: StudyItem,
  constructor(inboxId, models) {
    this.constructor.__super__.constructor.apply(this, [models]);
    this.setMeta('inboxId', inboxId);
  }
}, name));

export default StudyItemCollection;