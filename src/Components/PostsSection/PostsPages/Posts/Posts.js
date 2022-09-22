import React from 'react'
import { CreatePost } from '../../../CreatePost/CreatePost'
import  Header  from '../../PostsHeader/Header'
import Navigation  from '../../Navigation/Navigation'

export const Posts = () => {
    return (
        <div className = 'posts-main'>
            <div className='posts-header'><Header /></div>
            <div className='posts-navigation'><Navigation /></div>
            <div className='post-container'><CreatePost /></div>
           

        </div>
    )
}

