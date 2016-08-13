'use strict';

import BaseCollection from './BaseCollection';
import Util from 'src/helpers/util/index';
import StudyInbox from 'src/backbone/models/StudyInbox';

const name = 'StudyInboxCollection';
const StudyInboxCollection = BaseCollection.extend(Util.Collection.postDeclaration({
  model: StudyInbox
}, name));

export default StudyInboxCollection;