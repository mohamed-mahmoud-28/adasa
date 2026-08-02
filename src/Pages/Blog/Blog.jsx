import { useReducer } from "react";
import { useSearchParams } from "react-router-dom";
import BlogsData from "../../Data/BlogsData.json";
import Blogs from "./Blogs";
import FilterBlog from "./FilterBlog";
import HeroSecBlog from "./HeroSecBlog";

function filterReducer(state, action) {
  if (action.type === "SET_SEARCH") {
    return { ...state, search: action.value };
  }

  if (action.type === "SET_VIEW") {
    return { ...state, view: action.value };
  }

  return state;
}

export default function Blog() {
  const [filterState, dispatch] = useReducer(filterReducer, {
    search: "",
    view: "grid",
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const active = searchParams.get("category") || "جميع المقالات";


  function setActive(category) {
    if (category === "جميع المقالات") {
      setSearchParams({});
      return;
    }

    setSearchParams({ category });
  }

  function setSearch(value) {
    dispatch({ type: "SET_SEARCH", value });
  }

  function setView(view) {
    dispatch({ type: "SET_VIEW", value: view });
  }


  return (
    <>
      <HeroSecBlog />
      <FilterBlog
        search={filterState.search}
        active={active}
        setSearch={setSearch}
        setActive={setActive}
      />
      <Blogs
        key={`${filterState.search}-${active}`}
        posts={BlogsData.posts}
        search={filterState.search}
        active={active}
        view={filterState.view}
        setActive={setActive}
        setView={setView}
        setSearch={setSearch}
      />
    </>
  );
}
