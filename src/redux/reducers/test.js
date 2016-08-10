import {Map} from "immutable";
import * as TestActions from "../actions/test";

const test = (state) => {
  return state;
};

/**
 * Test reducer
 * @param   {Immutable.Map} state
 * @param   {Object}        action
 * @returns {Immutable.Map}
 */
export default function testReducer (state = Map(), action = {}) {
  switch(action.type) {
    case TestActions.TEST_TEST:
      return test(state);
    default:
      return state;
  }
}