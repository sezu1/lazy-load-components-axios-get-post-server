import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";


function PostsPage() {
    const url ='http://localhost:8000/posts'

    const [posts, setPosts] = useState([])

    async function getUsers(){
        const response = await axios.get(url);
        setPosts(response.data);
    }

    useEffect(() => {
        getUsers()
    }, []);

    return (
        <div>
            <h2>Posts page</h2>
            {posts.map(post => (
                <div key={post.id}>
                    <li>{post.title}</li>
                    <Link to={`/posts/${post.id}`}>
                        <button>detail info</button>
                    </Link>

                </div>
            ))}
        </div>
    );
}

export default PostsPage;