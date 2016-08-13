'use strict';

import Util from 'src/helpers/util/index';
import BaseModel from './BaseModel';

const name = 'StudyInbox';
const StudyInbox = BaseModel.extend(Util.Model.postDeclaration({}, name));

export default StudyInbox;