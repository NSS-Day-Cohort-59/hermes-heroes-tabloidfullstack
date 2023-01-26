import React, { useEffect, useState } from "react";
import { getAllTags } from "../modules/tagManager";

const TagList = () => {
  const [tags, setTags] = useState([]);

  const getTags = () => {
    getAllTags().then(tags => setTags(tags));
  };

  useEffect(() => {
    getTags();
  }, []);

  return (
    <div>
      {tags.map(t => 
        <div>{t.name}</div>
      )}
    </div>
  );
}

export default TagList;