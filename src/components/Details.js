import React from 'react'
import styled from 'styled-components'

function Details() {
  return (
    <Container>
       <Background>
        <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg'/>
       </Background>
       <Imagetitle>
        <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78'/>
        </Imagetitle>



       <Controls>
            <PlayButton>
                <img src='/images/play-icon-black.png'/>
                <span >PLAY</span>
            </PlayButton>
            <TrailerButton>
                <img src='/images/play-icon-white.png'/>
                <span >TRAILER</span>
            </TrailerButton>
            <AddButton></AddButton>
            <GroupWatchButton></GroupWatchButton>
        </Controls> 
    </Container>
  )
}

export default Details

const Container=styled.div`
min-height: calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position:relative;

`
const Background=styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:-1;
opacity:0.8;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`




const Imagetitle = styled.div`

    min-height:170px;
    min-width:200px;
    height:30vh;
    width:35vw;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
`

const Controls = styled.div`
    display:flex;

`




const PlayButton= styled.button   `
    border-radius:4px;
    font-size:15px;
    padding:0px 24px;
    margin-right:22px;
    display:flex;
    align-items:center;
    height:56px;
    background-color:rgb(249, 249,249);
    border:none;
    letter-spacing:1.8px;
    cursor:pointer;


    &:hover{
        background:rgb(198,198,198);
    }
`

const TrailerButton= styled(PlayButton)   `
    background:rgb(0,0,0,0.3);
    border:1px solid rgb(249,249,249);
    color:rgb(249,249,249);
    text-transform:uppercase;



`

const AddButton= styled.button   `
`

const GroupWatchButton= styled.button   `
`
