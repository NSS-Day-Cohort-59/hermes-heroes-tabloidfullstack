import React, { useEffect, useState } from "react";
import { getAllPosts } from "../modules/postManager";
import Post from './Post';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = () => {
        getAllPosts().then(posts => setPosts(posts));
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                {posts.map((post) => (
                    <Post post={post} key={post.id} />
                ))}
            </div>
        </div>
    );
}

export default PostList;