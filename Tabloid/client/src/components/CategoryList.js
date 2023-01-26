import React, { useEffect, useState } from "react";
import { getAllCategories } from "../modules/categoryManager";
import { useNavigate } from "react-router-dom";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate()

  const getCategories = () => {
    getAllCategories().then(categories => setCategories(categories));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
    <div>
      {categories.map(c => 
        <div key={c.id}>{c.name}</div>
      )}
    </div>
    <button onClick={() => {navigate("addcategory")}}>addcategory</button>
    </>
  );
}

export default CategoryList;