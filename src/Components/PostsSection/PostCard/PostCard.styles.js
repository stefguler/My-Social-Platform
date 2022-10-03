import styled from "styled-components";


export const PostCardContainer = styled.div`
    display: flex;
    background: white;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 20px 40px rgba(0, 0, 0, 0.15);
    border-radius: 0.5rem;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 1rem;
    padding: 2rem;
    width: 560px;

`

export const PostCardHeader = styled.div`
    display:flex;
    width: 100%;
    justify-content: space-between;

    img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
    }

`

export const PostCardHeaderProfile = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    padding: 0.5rem;
`


export const PostCardHeaderNaming = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`

export const PostCardName = styled.span`
    font-size: 14px;

`

export const PostCardDate = styled.span`
    font-size: 14px;
    opacity: 50%;

`


export const PostCardMenuBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    i {
        opacity: 50%;
    }
`

export const PostCardDescription = styled.p`
    width: 100%;
    text-align: start;
    font-size: 16px;
    line-height: 26px;
`

export const PostCardPictureContainer = styled.div`

`

export const PostCardPictures = styled.img`

`


export const PostCardFooter = styled.div`
    width: 100%;
    display: flex;

`

export const PostCardReactionsList = styled.ul`
    width: 100%;
    align-items: flex-start;
    justify-self: flex-start;
    list-style: none;
    display: flex;
    gap: 0.5rem;

    li:nth-child(2) {
        margin-right: 1rem;
    }

`

export const PostCardReaction = styled.li`
   
   i { opacity: 50%;}

`

export const PostCardLikes = styled.span`
    width: 5rem;
    display: flex;
    justify-self: flex-end;
    opacity: 50%;

`