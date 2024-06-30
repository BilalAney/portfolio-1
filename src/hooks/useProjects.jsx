/** @format */

import { useEffect, useReducer } from "react";

const initialState = {
  data: [],
  state: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "start_loading":
      return { ...state, state: "loading" };
    case "store_data":
      return { ...state, data: action.payload, state: "success" };
    case "failed":
      return { ...state, state: action.payload };
    default:
      throw new Error("Unknown action type");
  }
}

export default function useProjects() {
  const [{ data, state }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getData() {
      const cache = sessionStorage.getItem("projects");

      if (cache) {
        dispatch({ type: "store_data", payload: JSON.parse(cache) });

        return;
      }

      try {
        dispatch({ type: "start_loading" });
        const res = await fetch(
          "https://api.jsonbin.io/v3/b/6681ae07e41b4d34e40b47ce"
        );

        if (!res.ok) throw new Error("");

        const data = await res.json();
        // console.log(data, "--------🟢");
        sessionStorage.setItem("projects", JSON.stringify(data.record));
        dispatch({ type: "store_data", payload: data.record });
      } catch (e) {
        console.error(e.message);
        dispatch({
          type: "failed",
          payload: "Error | ❌ unable to fetch the data",
        });
      }
    }
    getData();
  }, []);

  return [data, state];
}
