import styled from 'styled-components';


export const PostContainer = styled.div`
    background: lightgrey;
    display: grid;
    grid-template-columns: 2fr;
    
`

export const CreateP = styled.div`   
    position: absolute;
    width: 560px;
    height: 120px;
    left: 144px;
    top: 150px;
    flex-direction: row;
    display: flex;
    align-items: center;
    background: white;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    justify-content: space-around;
`

export const CreatePostPhoto = styled.div`

img {

// left: -1%;
// right: 30.72%;
// top: 0%;
// bottom: -6.25%;
width: 71px;
height: 63px;
align-items: center;
border-radius: 50px;
}
`

export const PostInput = styled.div`
    input {
    width: 217px;
    height: 26px;
    }

`


export const PostFirst =styled.div`
position: absolute;
width: 560px;
height: 750px;
left: 144px;
top: 354px;

background: #FFFFFF;
box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
border-radius: 4px;
`


export const PostFirstHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  
    div {
        display: flex;
        justify-content: center;
        align-items: center;
    }

img{
    border-radius: 50px;
    width: 70px;
    height: 70px;
}
`
export const PostFirstHeaderText = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px;

`

export const PostFirstText= styled.div`
   
     width: 560px;
    height: 52px;
    margin 10px;
`
export const PostFirstPictures = styled.div`
    display: grid;
    width: 100%;
    margin-right: 10px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 5px;
    




`
 export const PostRightFirst = styled.div`

position: absolute;
width: 560px;
height: 250px;
left: 736px;
top: 150px;

background: #FFFFFF;
box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
border-radius: 4px;
`

export const PostRightFirstHeader = styled.div`
 
display: flex;

flex-direction: row;
// align-items: start;

    div p{
        margin: 0 auto;

    }
`

export const PostRightFirstText = styled.div`
    height: 100px;
    width: 560px;
    p{
        padding: 10px;
    }
`        

export const PostRightFooter = styled.div`
height: 70px;
width: 560px;
display: flex;
align-items: end;
justify-content: space-between;

div {
    display: flex;
    flex-direction: row;
    padding: 0 10px;
}

`


export const PostRightSecond = styled.div`

position: absolute;
    width: 560px;
    height: 660px;
    left: 736px;
    top: 450px;

    background: #FFFFFF;
box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2), 0px 10px 20px rgba(0, 0, 0, 0.05);
border-radius: 4px;
`


export const PostFooter = styled.div`

height: 53px;
width: 560px;
display: flex;
justify-content: space-between;

div {
    display: flex;
    flex-direction: row;
    padding: 10px;
}


`
export const PostRightSecondHeader = styled.div`

   width: 560px;
   height: 50px;
    display: flex;
    justify-content: space-between;

div{
    display: flex;
    justify-content: center;
    align-items: center;
    // flex-direction: 
}
img{
    border-radius: 50px;
}

`
export const PostRightSecondText = styled.div`

height: 50px;
width: 560px;

`

export const WhosePost = styled.div`
    
    width: 480px;

 
   
`

export const WhosePostHeader = styled.div`

width: 484px;
height: 50px;

div{
    display: flex;
    // flex-direction:
     
}

p {
    display; flex;
    flex-direction: column;
    
}

img{
    border-radius: 50px;
}
`

export const WhosePostText = styled.div`
    height: 50px;
    width: 560px;
    padding: 10px;
`


export const WhosePostPicture = styled.div`
img{
    height: 293px;
    width: 480px;
}
`

export const WhosePostFooter = styled.div`
    width: 560px;
    height: 100px;   
display: flex;
align-items: end;
justify-content: space-between;

div {
    display: flex;
    flex-direction: row;
    padding: 0 10px;
}
`