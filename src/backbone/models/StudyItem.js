'use strict';

import Util from 'src/helpers/util/index';
import BaseModel from './BaseModel';

const name = 'StudyItem';
const StudyItem = BaseModel.extend(Util.Model.postDeclaration({

}, name));

export default StudyItem;