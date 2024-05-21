import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";


export function PostsDetailPage() {

    const {id} = useParams();


    const [post, setPosts] = useState(null);
    const [items, setItems] = useState([]);



    const url ='http://localhost:8000/posts'

    async function getPosts(){

        try{
            const response = await axios.get(`${url}?id=${id}`);
            setItems(response.data)
        }
        catch (error){
            console.log(error);
        }



    }

    useEffect(() => {
        getPosts()
    }, []);


    console.log(id)

    return (
        <div>

            {items.map((item => (
                <div key={item.id}>
                    <p>UserID: {item.userId}</p>
                    <p>Title: {item.title}</p>
                    <p>Body: {item.body}</p>
                </div>
            )))}
        </div>
    );
}

