import React from 'react'
import Post from './Post'

export const UserPost = ({posts}) => {
  return (
    <>
        {posts.map((post, index) => 
            <Post key={index} id={post.id} name={post.name} surname={post.surname} description={post.description} likes={post.likes} postImages={post.postImages} avatar={post.avatar} likeIcon={post.likeIcon} shareIcon={post.shareIcon}/>
        )}
    </>
  )
}
