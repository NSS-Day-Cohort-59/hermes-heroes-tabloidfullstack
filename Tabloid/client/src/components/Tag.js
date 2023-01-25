import React from "react";
import { Card, CardBody } from "reactstrap";

const Tag = ({ tag }) => {
  return (
    <Card >
      <p className="text-left px-2">{tag.name}</p>
      <CardBody>
        <iframe className="tag"
          src={tag.url}
          title="YouTube tag player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen />

        <p>
          <strong>{tag.name}</strong>
        </p>
      </CardBody>
    </Card>
  );
};

export default Tag;