import { CHAR_LOAD, GET_DESCR_CHAR, SEARCH_CHAR } from "./types";

export function charLoad() {
  return async (dispatch) => {
    const res = await fetch("https://swapi.dev/api/people/?page=1");
    const jsonData = await res.json();
    dispatch({
      type: CHAR_LOAD,
      data: jsonData,
    });
  };
}

export function getDescrChar(url) {
  return async (dispatch) => {
    const res = await fetch(url);
    const descrData = await res.json();
    dispatch({
      type: GET_DESCR_CHAR,
      data: descrData,
    });
  };
}

export function searchChar(value) {
  return async (dispatch) => {
    const res = await fetch(`https://swapi.dev/api/people/?search=${value}`);
    const searchData = await res.json();
    dispatch({
      type: SEARCH_CHAR,
      data: searchData,
    });
  };
}
