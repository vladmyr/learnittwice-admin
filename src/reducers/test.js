import {Map} from "immutable";

/**
 * Test reducer
 * @param   {Immutable.Map} state
 * @param   {Object}        action
 * @returns {Immutable.Map}
 */
export default function test (state = Map(), action = {}) {
  switch(action.type) {
    default:
      return state;
  }
}