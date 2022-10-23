import styled from "styled-components";


export const OuterFormContainer = styled.div`
 display: flex;
 flex-direction: column;
 width: 80%;
 height: 600px;
 background: none;
 position: absolute;
 top: 5rem;
`

export const UploadImageContainer = styled.button`
 width: 20%;
 height: 5%;
 position: absolute;
 align-self: flex-start;
 justify-content: flex-start;
 right: 0;
 color: white;
 background: none;
 border: none;
 font-size: 14px;
 text-align: end;
 cursor: pointer;

  i {
    padding-right: 1rem;
  }

  :hover {
    color: black;
  }

`

export const FormContainer = styled.form`
    width: 100%;
    height: 93%;
    background: white;
    gap: 2px;
    display: flex;
    position: absolute;
    bottom: 0;
    border-radius: 0.3rem;
    padding: 1rem;
  `;

export const LeftSide = styled.div`
    width: 319px;
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  `;

export const TopLeft = styled.div`
    width: 155px;
    height: 144px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `;
export const Avatar = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50px;
    
    margin: 0 auto;
  `;
export const UpdateImageButton = styled.div`
    border: 1px solid lightgrey;
    border-radius: 50px;
    background: #fff;
    font-size: 10px;
    width: 100%;
    height: 100%;
    
    cursor: pointer;

    :hover {
      background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
      color: white;
    }

  `;

export const UpdateImageContainer = styled.div`
  display: flex;
  text-align: center;
  width: 8rem;
  height: 40px;
`;


export const BottomLeft = styled.div`
    width: 202px;
    height: 150px;
    display: flex;
    gap: 0.1rem;
    flex-direction: column;
    justify-content: space-between;
  `;
export const DeleteAccount = styled.button`
    width: 202px;
    height: 40px;
    border: 1px solid lightgrey;
    border-radius: 50px;
    background-color: #fff;
    font-size:10px;
    font-style: italic;
    cursor: pointer;

    :hover {
      background: red;
      color: white;
    }

  `;


export const Save = styled.button`
    width: 202px;
    height: 40px;
    background: linear-gradient(132.96deg, #c468ff 3.32%, #6e91f6 100%);
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
    border-radius: 30px;
    border: none;
    color: white;
    font-size: 10px;
    cursor: pointer;

    :hover {
      background: lightgreen;
    }

  `;

export const Cancel = styled.button`
    width: 202px;
    height: 40px;
    background: #F08080;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.07);
    border-radius: 30px;
    border: none;
    color: white;
    font-size: 10px;
    cursor: pointer;

    :hover {
      background: lightgreen;
    }
`;

export const RightSide = styled.div`
    height: 99%;
    width: 99%;
    background-color: white;
    border-left: 1px solid  rgba(0, 0, 0, 0.10);
  `;

export const Col1 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;
  `

export const LeftCol = styled.div`
display: flex;
width: 50%;
flex-direction: column;
gap: 1rem;
padding: 1rem;

div {
  display: flex;
  flex-direction: column;
}

input {
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.10);
  padding: 1rem;
  font-size: 16px;
}

label {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.50);
}
  
`

export const Col2 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
padding: 0 1rem;
margin-left: 2rem;

span {
  margin-bottom: 1rem;
}

div {
  display: flex;
  gap: 1rem;
}
`

export const Label = styled.div`
display: flex;
align-items: center;
padding: 0.2rem;
background: rgba(0, 0, 0, 0.1);
border-radius: 2rem;
gap: 1rem !important;
padding: 0.2rem 0.6rem;

i {
  color: rgba(0, 0, 0, 0.2);
}

`

export const Col3 = styled.div`
display: flex;
padding: 1rem;
width: 80%;
gap: 1rem;

div {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;

  input {
    border: none;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.10);
    padding: 1rem;
    font-size: 16px;
  }

  button {
    border-radius: 2rem;
    border: none;
    width: 75px;
    height: 32px;
    font-size: 10px;
    cursor: pointer;

    :hover {
      background: lightgray;
    }
  }
}




`