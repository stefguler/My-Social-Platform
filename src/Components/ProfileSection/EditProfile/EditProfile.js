import React from "react";
import styled from "styled-components";

const EditProfile = () => {
  const FormContainer = styled.div`
    width: 1152px;
    height: 550px;
    margin: 10vh auto;
    background-color: lightgrey;
    gap: 2px;
    display: flex;
  `;
  const LeftSide = styled.div`
    width: 319px;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  `;

  const TopLeft = styled.div`
    width: 155px;
    height: 144px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;
  const Avatar = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    
    margin: 0 auto;
  `;
  const UpdateImage = styled.button`
    width: 155px;
    height: 40px;
    border: 1px solid lightgrey;
    border-radius: 50px;
    background: #fff;
  `;
  const UpdateImageText = styled.p`
    font-size: 10px;
    letter-spacing: 1px;
    
  `;
  const BottomLeft = styled.div`
    width: 202px;
    height: 95px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `;
  const DeleteAccount = styled.button`
    width: 202px;
    height: 40px;
    border: 1px solid lightgrey;
    border-radius: 50px;
    background-color: #fff;
  `;
  const DeleteAccountText = styled.p`
    font-size: 10px;
    letter-spacing: 1px;
  `;

  const Save = styled.button`
    width: 202px;
    height: 40px;
    background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
    border-radius: 30px;
    border: none;
  `;
  const SaveText = styled.p`
    font-size: 10px;
    letter-spacing: 1px;
    color: #fff;

  `;

  const RightSide = styled.div`
    width: 831px;
    height: 100%;
    background-color: white;
  `;

  return (
    <>
      <FormContainer>
        <LeftSide>
          <TopLeft>
            <Avatar src="https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-1591373.jpg&fm=jpg" />
            <UpdateImage>
              <UpdateImageText>UPDATE IMAGE</UpdateImageText>
            </UpdateImage>
          </TopLeft>
          <BottomLeft>
            <DeleteAccount>
              <DeleteAccountText>DELETE ACCOUNT</DeleteAccountText>
            </DeleteAccount>
            <Save>
              <SaveText>SAVE</SaveText>
            </Save>
          </BottomLeft>
        </LeftSide>
        <RightSide></RightSide>
      </FormContainer>
    </>
  );
};

export default EditProfile;