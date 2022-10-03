import {
    PostCardContainer, PostCardHeader, PostCardHeaderNaming, PostCardName,
    PostCardDate, PostCardMenuBtn, PostCardDescription,
    PostCardPictureContainer, PostCardPictures, PostCardFooter, 
    PostCardReactionsList, PostCardReaction, PostCardLikes, PostCardHeaderProfile
} from "./PostCard.styles"
import Moment from 'moment';

export default function PostCard(props) {
    const post = props.post

    console.log(post)

    return (
        <>
            <PostCardContainer>
                <PostCardHeader>
                    <PostCardHeaderProfile>
                    <img src='maleAvatar.jpg'></img>
                    <PostCardHeaderNaming>
                        <PostCardName>{post.user.first_name} {post.user.last_name}</PostCardName>
                        <PostCardDate>{Moment(post.created).format('MMMM d')}</PostCardDate>
                    </PostCardHeaderNaming>
                    </PostCardHeaderProfile>
                    <PostCardMenuBtn>
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </PostCardMenuBtn>
                </PostCardHeader>
                <PostCardDescription>{post.content} </PostCardDescription>
                <PostCardPictureContainer>
                        {
                            post.images.length > 0 ? 
                            post.images.map((img, idx) => {
                                return <img key={idx} src={img} width='20rem' ></img>
                            }) : null
                        }

                </PostCardPictureContainer>
                <PostCardFooter>
                    <PostCardReactionsList>
                        <PostCardReaction><i class="fa-solid fa-heart"></i></PostCardReaction>
                        <PostCardReaction>Like</PostCardReaction>
                        <PostCardReaction><i class="fa-solid fa-share"></i></PostCardReaction>
                        <PostCardReaction>Share</PostCardReaction>
                    </PostCardReactionsList>
                    <PostCardLikes>{post.amount_of_likes} likes</PostCardLikes>
                </PostCardFooter>
            </PostCardContainer>
        </>
    )
}