import React, {useEffect, useState} from 'react'
import { UserPost } from './UserPost';


const UserPosts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let usersData = [
            {
                id: 1,
                name: 'Jeison',
                surname: 'Rodriguez',
                avatar: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-1591373.jpg&fm=jpg",
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde atque delectus placeat. Asperiores, voluptate voluptatum perspiciatis quidem laboriosam accusantium nemo placeat repudiandae fugiat eum odio quos veritatis cum neque esse.',
                postImages: [
                    "https://images.pexels.com/photos/1654133/pexels-photo-1654133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
                    "https://images.pexels.com/photos/450038/pexels-photo-450038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
                    "https://images.pexels.com/photos/1643773/pexels-photo-1643773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", 
                    "https://images.pexels.com/photos/8905102/pexels-photo-8905102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                ],
                likes: 0,
                likeIcon: "https://cdn-icons-png.flaticon.com/512/739/739231.png",
                shareIcon: "https://cdn-icons-png.flaticon.com/128/2550/2550240.png"
              
            }
        ]

        new Promise((resolve) => {
      
            setTimeout(() => {
              resolve(usersData)
            },2000)
            
          }).then((data)=> {
            setPosts(data);
          }).catch()
          
        },[])

  return (
    <>
        {posts.length ? <UserPost posts={posts}/> : 'Loading post'}                    
    </>
  )
}

export default UserPosts