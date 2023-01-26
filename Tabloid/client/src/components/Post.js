import React from "react";
import { Card } from "reactstrap";

const Post = ({ post }) => {
    return (
        <Card >
            <div>
                <strong>{post.title}</strong>
            </div>
            <div>
                <strong>{post.content}</strong>
            </div>
            <div>
                <strong>{post.category}</strong>
            </div>
        </Card>
    );
};

export default Post;



