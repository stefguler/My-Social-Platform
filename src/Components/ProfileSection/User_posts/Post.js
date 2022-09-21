import React from "react";
import styled from "styled-components";

const Post = ({ avatar, name, surname, description, postImages, likeIcon, shareIcon, likes}) => {

  const Page = styled.div`
    width: 560px;
    height: 750px;
    background-color: #f2f2f2;
    border-radius: 4px;
  `
  const Container = styled.div`
    background-color: '#fffff';
    width: 100%;
    height: 100%;
  `

  const PostHead = styled.div`
    width: 500px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  `;
  const Status = styled.div`
  display:flex;
  `
  const Avatar = styled.img`

    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 4px 12px;
  `;
  const NameCont = styled.div`
    width: 200px;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  `;
  const Name = styled.p`
    color: '#0000000';
    font-size: 15px;
    margin: 0 !important;
  `;

  const TimePosted = styled.p`
    color: grey;
    font-size: 12px;
    margin: 0 !important;
  `;
  const Options = styled.div`
    flex: end;
    width: 24px;
    height: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  `

  const Dots = styled.div`
    width: 4px;
    height: 4px;
    background-color: grey;
    border-radius: 4px;
  `

  const PostDescription = styled.div`
  width: 500px;
  height: 56px;
  display:flex;
  text-align: start;
  margin: 0 auto;
  
  `
  const Parr = styled.p`
  font-size: 12px;
  
  
  `

  const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  margin: 20px auto;
  grid-gap: 20px;
  width: 500px;
  `
  
  const PhotoGrid = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 4px;
  object-fit: cover;
  `
  const Actions = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  margin-left: 35px;
  `
  const Like = styled.img`
  width: 18px;
  height: 18px;
  `
  const Share = styled.img`
  width: 18px;
  height: 18px;
  `
  const LikesCount = styled.p`
  margin-left:250px;
  `

  return (
    <>
      <Container>
        <Page>
          <PostHead>
            <Status>
              <Avatar src={avatar} />
              <NameCont>
                <Name>
                  {name} {surname}{" "}
                </Name>
                <TimePosted>Just now</TimePosted>
              </NameCont>
            </Status>
              <Options>
                      <Dots></Dots>
                      <Dots></Dots>
                      <Dots></Dots>
              </Options>
          </PostHead>
          <PostDescription>
          <Parr>{description}</Parr>
          </PostDescription>
          <GridContainer>
            <PhotoGrid src={postImages[0]}></PhotoGrid>
            <PhotoGrid src={postImages[1]}></PhotoGrid>
            <PhotoGrid src={postImages[2]}></PhotoGrid>
            <PhotoGrid src={postImages[3]}></PhotoGrid>
          </GridContainer>
            <Actions>
              <Like src={likeIcon}></Like>
              <p>Like</p>
              <Share src={shareIcon}></Share>
              <p>Share</p>
            <LikesCount>
              {likes} Likes
            </LikesCount>
            </Actions>
        </Page>
      </Container>
    </>
  );
};

export default Post;
