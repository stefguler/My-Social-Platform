import React from 'react'
import { CreatePost } from "../../CreatePost/CreatePost"
import  Header  from '../../../Header/Header'

export const Posts = () => {
    return (
        <div className = 'posts-main'>
            <div className='posts-header'><Header /></div>
            <div className='post-container'><CreatePost /></div>
           

        </div>
    )
}

