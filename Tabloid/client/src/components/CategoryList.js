import React, { useEffect, useState } from "react";
import { getAllCategories } from "../modules/categoryManager";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    getAllCategories().then(categories => setCategories(categories));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      {categories.map(c => 
        <div>{c.name}</div>
      )}
    </div>
  );
}

export default CategoryList;