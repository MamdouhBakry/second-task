import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllCategories } from "../../redux/actions/categoryactions";
import "./Home.scss";
function Home() {
  const dispatch = useDispatch();
  const categories = useSelector(
    (state) => state.categories.categories.categories
  );
  console.log(categories);
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  return (
    <>
      <h2 className="text-center mb-5">All Categories</h2>
      <div className="row">
        {categories &&
          categories.map((category, i) => (
            <NavLink key={i} className="col-2 link" to={`/entries/${category}`}>
              <div className="category shadow">{category}</div>
            </NavLink>
          ))}
      </div>
    </>
  );
}

export default Home;
