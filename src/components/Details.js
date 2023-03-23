import React, { useState ,useEffect} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import db from "../firebase"

function Details() {


    const mymovie =[
        {
            "backgroundImg": "https://rukminim1.flixcart.com/image/416/416/jn3hocw0/poster/j/s/q/medium-hollywood-movie-wall-poster-pirates-of-the-caribbean-dead-original-imaf9uv7zzgp6wvg.jpeg?q=70",
            "title": "Pirates of the Caribbean",
            "description":"Pirates of the caribbean is one of the finest movie to wacth.. lots of advantures ... lot more entertainment movie ......",
            "id": 1
        },
        {
            "backgroundImg": "https://wallpapercave.com/dwp1x/wp2162760.jpg",
            "title": "Ironman 3",
            "id": 2
        },
        {
            "backgroundImg": "https://wallpapercave.com/dwp1x/wp2162891.jpg",
            "title": "Thor",
            "id": 3
        }
    ]

    const {id} = useParams();

    const [movie,setMovie]=useState();


    console.log(movie);
    

    useEffect(()=>{

        mymovie.map((data)=>{
            console.log(data);
            if(data.id == id){
                setMovie(data);
                console.log("if block");
                // break;
            }
            else{
                console.log("else");
            }
        })
        
    //     db.collection("movies")
    // .doc(id)
    // .get()
    // .then((doc)=>{
    //     if(doc.exists){
    //         setMovie(doc.data());
    //     }
    //     else{
    //         //redirect to home page
    //     }

    // })


    },[])


    return (
        <Container>
            {movie && 
            <Background>
                <img src={movie.backgroundImg} />
            </Background>
            }
            {movie &&
            <Imagetitle>
            <img src={movie.backgroundImg}/>
            </Imagetitle>
            }
            {/* <Background>
                <img src={movie.backgroundImg} />
            </Background>
            <Imagetitle>
                <img src={movie.title} />
            </Imagetitle> */}



            <Controls>
                <PlayButton>
                    <img src='/images/play-icon-black.png' />
                    <span >PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src='/images/play-icon-white.png' />
                    <span >TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>

                </AddButton>
                <GroupWatchButton>
                    
                    <img src='/images/group-icon.png'/>

                </GroupWatchButton>

            </Controls>
            <SubTitle>
                2018 * 7m * Family, Fantasy, Kids, Animation
            </SubTitle>
            {movie &&
            <Description>
             {movie.description}
            </Description>
            }
        </Container>
    )
}

export default Details

const Container = styled.div`
min-height: calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position:relative;

`
const Background = styled.div`
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

    margin-top:60px;
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
    align-items:center;

`




const PlayButton = styled.button`
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

const TrailerButton = styled(PlayButton)`
    background:rgb(0,0,0,0.3);
    border:1px solid rgb(249,249,249);
    color:rgb(249,249,249);
    text-transform:uppercase;



`

const AddButton = styled(PlayButton)`
    margin-right:16px;
    width:44px;
    height:44px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:50% ;
    border:2px solid white;
    background:rgb(0, 0, 0, 0.6);
    cursor:pointer;
    span{
       font-size:30px;  
       color:white;     
    }
`

const GroupWatchButton = styled(AddButton)`
     background:rgba(0,0,0)
`



const SubTitle =styled.div`
color:rgb(249, 249, 249);
font-size:15px;
min-height: 20px;
margin-top:26px;

`
const Description = styled.div  `
    line-height : 1.4;
    font-size:20px;
    margin-top:16px;
    color:rgb(249, 249, 249);
    max-width:760px;

`