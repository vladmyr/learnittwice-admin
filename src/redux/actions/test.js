import { Map, List } from "immutable";
import { Promise } from "bluebird";

// action types
export const TEST_TEST = "TEST_TEST";
export const TEST_API_FETCH = "TEST_API_FETCH";

// actions
export function testTest(){
  return {
    type: TEST_TEST
  }
}

// thunk actions
export function apiFetch() {
  return (dispatch) => {

  }
}