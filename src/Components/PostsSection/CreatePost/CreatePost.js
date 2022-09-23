
import { useState, useEffect } from 'react'
import './create-post-style.css'
import { PostButton, PostDots, PostList, WhosePostFooter, WhosePostPicture, WhosePostText, WhosePostHeader, PostRightSecondText, PostRightFooter, PostRightFirstText, PostRightFirstHeader, PostFirstHeaderText, PostContainer, CreateP, PostInput, PostFirst, CreatePostPhoto, PostFirstHeader, PostFirstText, PostFirstPictures, PostFooter, PostRightFirst, PostRightSecond, PostRightSecondHeader, WhosePost } from './Style'

 

export const CreatePost = () => {
const [ createpost, setCreatePost ] = useState("")
const [ post, setPost ] = useState([])




    useEffect (() => {
        const url = 'https://motion.propulsion-home.ch/backend/api/social/posts/'

        const config = {
            method: "GET",
            headers: new Headers ({
                "Authorization": `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY0MDE3NDc5LCJqdGkiOiI4MGNiNDY2Y2JjZjE0ZDRlOTM2ZDNiMTM2ZmExMGYwZCIsInVzZXJfaWQiOjE3NTZ9.GqkfxTYYzjTFYzshjuH-KBXSUGb6IOjdb5-RW5_WiUU"}`
            })
        }
            fetch(url, config)
            .then((response) => response.json())
            .then((data) => setPost(data.results))
    }, []);

    
    
    
   
    console.log(createpost)

   

    function handleClick(event) {
        event.preventDefault();
        fetch('https://motion.propulsion-home.ch/backend/api/social/posts/',{
            method: 'POST',
            mode:  'cors',
            headers: new Headers ({
                "Content-Type": 'application/json',
                "Authorization": `Bearer ${"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY0MDE3NDc5LCJqdGkiOiI4MGNiNDY2Y2JjZjE0ZDRlOTM2ZDNiMTM2ZmExMGYwZCIsInVzZXJfaWQiOjE3NTZ9.GqkfxTYYzjTFYzshjuH-KBXSUGb6IOjdb5-RW5_WiUU"}`
            }),
            body: JSON.stringify({
                content: `${createpost}`,
                 
            })
            })
            .then(response => console.log(response.json()))
        }
    
//             state = {  
//      likeCount: 0,
   
//     } 
//     likePost = () => {
//      this.setState(({ likeCount }) => {
//          return {
//              likeCount: ++likeCount,
             
//          }
//      })
//    }


  
    return (

        <>
        <PostContainer>
        {
        <div className='post-main'>

        
            <CreateP>
            
                <CreatePostPhoto>
                <img src='femaleAvatar.jpg' alt='ph'></img>
                {/* <p> {post.user.first_name} {post.user.last_name} </p> */}
                </CreatePostPhoto>
            <PostInput>
                <input type='text' placeholder='Add a post' value={createpost} onChange={(event) => setCreatePost(event.target.value)} />

            </PostInput>
            <PostButton>
            <button onClick={(event) => handleClick(event) }>
                <img src='Button.png' alt='bt' />
            </button>
            </PostButton>
            </CreateP>
     
            <PostList>

                {post.map((post, idx) => ( 
                      <PostFirst key={idx}>
                      <PostFirstHeader>
                              
                              <div>
                                  <img src='Image (5).png' alt='ph'></img>
                                  <PostFirstHeaderText>
                                      <p>{post.user.first_name} {post.user.last_name}</p>
                                      {/* <p>new Date({post.created}).toLocaleTimeString()</p> */}
                                  </PostFirstHeaderText>
                              </div>
                              <PostDots>
                              <p>...</p>
                              </PostDots>
                      </PostFirstHeader>
                      <PostFirstText>
                          <p>
                          {post.content} 
                          </p>
                      </PostFirstText>
                      <PostFirstPictures>
                          <img src ='' alt='ph'></img>
                          <img src='Image (2).png' alt='ph'></img>
                          <img src='Image (3).png' alt='ph'></img>
                          <img src='Image.png' alt='ph'></img>
                      </PostFirstPictures>
                      <PostFooter>
                              <div>
                                 <div>
                                      <img src='Shape (1).svg' alt='heart'></img>
                                      <p>Like</p>
                                  </div> 
                                  <div>
                                      <img src='Shape (2).svg' alt='share'></img>
                                      <p>Share</p>
                                  </div>
                              </div>    
                              <div>
                                  <p>likes</p>
                              </div>   
                      </PostFooter>
                  </PostFirst>
                ))}
      
            </PostList>
            {/* <PostRightFirst>
                <PostRightFirstHeader>
                        
                            <div>
                                <img src='Image (7).png' alt='ph'></img>
                            </div> 
                                <div>
                                <p>Patricia Jindai</p>
                                <p>6 hour ago</p>
                            </div>
                        
                        </PostRightFirstHeader>
                        <PostRightFirstText>
                        <p>TextAreasdksfnsjfndjfndjndjfdjfdjgfnjgnjfgjnfvjfn
                            ekfjefnddknfndfdfkdmkfdm</p>
                        </PostRightFirstText>          
                        <PostRightFooter>
                            <div>
                                <div>
                                <img src='Shape (1).svg' alt='heart'></img>
                                <p>Like</p>
                                </div>
                                
                                <div>
                                <img src='Shape (2).svg' alt='share'></img>
                                <p>Share</p>
                                </div>
                            </div>
                            
                                <div><p>likes</p></div>
                        </PostRightFooter>    
                   
                
                </PostRightFirst>
                <PostRightSecond>
                
                    <PostRightSecondHeader>
                        <div>
                        <div>
                        <img src='Image (8).png' alt='sh'></img>
                        </div>
                        <div>
                        <p>Name</p>
                        <p>shared a post</p>
                        <div><span>June 20</span></div>
                        </div>
                        </div>
                    </PostRightSecondHeader>
                    <PostRightSecondText>
                        <p>TextArea TextAreaTextAreaTextAreaTextAreaTextAreaTextAreaTextArea</p>
                     </PostRightSecondText>
                    <WhosePost>
                        <WhosePostHeader>
                       <div>
                            <div>
                            <img src='Image (9).png' alt='ph'></img>
                            </div>
                            <div>
                            <p>Leticia Suarez</p></div>
                            <div><p>June 19</p>
                            </div>
                        </div>
                        </WhosePostHeader>
                        <WhosePostText>
                       <p>TextAreaTextAreaTextAreaTextAreaTextAreaTextAreaTextArea</p>
                       </WhosePostText>
                       <WhosePostPicture>
                        <img src='Image (6).png' alt='ph'></img>
                        </WhosePostPicture>
                        </WhosePost>

                  
                    <WhosePostFooter>
                            <div>
                            <div>
                            <img src='Shape (1).svg' alt='shape'></img>
                                <p>Like</p>
                            </div>
                               
                            
                            <div> 
                                <img src='Shape (2).svg' alt='shape'></img>
                                <p>Share</p>
                            </div>
                            </div>
                            <div>
                                <div>
                                    <p>likes</p>
                                </div>
                            </div>
                     
                    </WhosePostFooter>
                
                </PostRightSecond> */}
    </div>
   
}
    </PostContainer>
    </>
    )
}


