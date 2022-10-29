import { CHAR_LOAD } from "./types";

export function charLoad() {
  return async (dispatch) => {
    const res = await fetch("https://swapi.dev/api/people/");
    const jsonData = await res.json();
    dispatch({
      type: CHAR_LOAD,
      data: jsonData,
    });
  };
}
