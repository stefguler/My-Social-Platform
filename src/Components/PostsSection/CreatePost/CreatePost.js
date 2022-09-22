import React, { Component } from 'react'
// import { State, useState } from 'react'
import './create-post-style.css'
import { WhosePostFooter, WhosePostPicture, WhosePostText, WhosePostHeader, PostRightSecondText, PostRightFooter, PostRightFirstText, PostRightFirstHeader, PostFirstHeaderText, PostContainer, CreateP, PostInput, PostFirst, CreatePostPhoto, PostFirstHeader, PostFirstText, PostFirstPictures, PostFooter, PostRightFirst, PostRightSecond, PostRightSecondHeader, WhosePost } from './Style'





export class CreatePost extends Component {


   state = { 
    likeCount: 0
   } 
   likePost = () => {
    this.setState(({ likeCount }) => {
        return {
            likeCount: likeCount+1
        }
    })
   }


   render(){
    return (

        <>
        <PostContainer>
        {
        <div className='post-main'>

        
            <CreateP>
            
                <CreatePostPhoto>
                <img src='Image (5).png' alt='ph'></img>
                </CreatePostPhoto>
            <PostInput>
                <input type='text'></input>
            </PostInput>
            <img src='Button.png' alt='bt'></img>
            </CreateP>
        
        <PostFirst>
            <PostFirstHeader>
                    
                    <div>
                        <img src='Image (5).png' alt='ph'></img>
                        <PostFirstHeaderText>
                            <p>Jeniffer Smith</p>
                            <p>Just now</p>
                        </PostFirstHeaderText>
                    </div>
                    <p>...</p>
            </PostFirstHeader>
            <PostFirstText>
                <p>
                Lorem 
                </p>
            </PostFirstText>
            <PostFirstPictures>
                <img src ='Image1.png' alt='ph'></img>
                <img src='Image (2).png' alt='ph'></img>
                <img src='Image (3).png' alt='ph'></img>
                <img src='Image.png' alt='ph'></img>
            </PostFirstPictures>
            <PostFooter>
                    <div>
                       <div>
                            <img onClick={this.likePost} src='Shape (1).svg' alt='heart'></img>
                            <p>Like</p>
                        </div> 
                        <div>
                            <img src='Shape (2).svg' alt='share'></img>
                            <p>Share</p>
                        </div>
                    </div>    
                    <div>
                        <p>{this.state.likeCount} likes</p>
                    </div>   
            </PostFooter>
        </PostFirst>
            <PostRightFirst>
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
                            
                                <div><p>{this.state.likeCount} likes</p></div>
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
                                    <p>{this.state.likeCount} likes</p>
                                </div>
                            </div>
                     
                    </WhosePostFooter>
                
                </PostRightSecond>
            </div>
   
}
    </PostContainer>
    </>
    )
}
}

