import React from 'react';
import {useForm} from "react-hook-form";
import axios, {post} from "axios";

function CreatePostPage() {
    const {register,
        handleSubmit,
        reset} = useForm()

    function submit(values){
        sendPosts(values)
    }

    const url ='http://localhost:8000/posts'

    async function sendPosts(values){
        try{
            const response = await axios.post(url, values)
            alert('пост создан')
        }
        catch(error){
            console.log(error)
        }

    }

    return (
        <div>
            <h2>Create post page</h2>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder="title" {...register('title')}/>
                <textarea cols="20" rows="5" placeholder='body' {...register('body')}></textarea>
                <button>send</button>
            </form>

        </div>
    );
}

export default CreatePostPage;