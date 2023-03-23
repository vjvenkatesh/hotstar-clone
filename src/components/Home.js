import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Movies from './Movies'
import Viewers from './Viewers'
import db from '../firebase'
import { useDispatch } from 'react-redux'
import { setMovies } from '../features/movie/movieSlice'
// import firebase from '../firebase'

// import { getDoc } from 'firebase/firestore'

function Home() {

    const dispatch = useDispatch();
    let Records=[
            {
                "backgroundImg": "https://rukminim1.flixcart.com/image/416/416/jn3hocw0/poster/j/s/q/medium-hollywood-movie-wall-poster-pirates-of-the-caribbean-dead-original-imaf9uv7zzgp6wvg.jpeg?q=70",
                "title": "Pirates of the Caribbean",
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
    // let Records = {
    //     "movies": {
    //         "1": {
    //             "backgroundImg": "https://rukminim1.flixcart.com/image/416/416/jn3hocw0/poster/j/s/q/medium-hollywood-movie-wall-poster-pirates-of-the-caribbean-dead-original-imaf9uv7zzgp6wvg.jpeg?q=70",
    //             "title": "Pirates of the Caribbean",
    //             "id": 1
    //         },
    //         "2": {
    //             "backgroundImg": "https://wallpapercave.com/dwp1x/wp2162760.jpg",
    //             "title": "Ironman 3",
    //             "id": 2
    //         },
    //         "3": {
    //             "backgroundImg": "https://wallpapercave.com/dwp1x/wp2162891.jpg",
    //             "title": "Thor",
    //             "id": 3
    //         }
    //     }
    // }

    useEffect(() => {

        // db.collection("movies").onSnapshot((Records)=>{

        // console.log(Records);
        dispatch(setMovies(Records));


        // });        
        // firebase.collection("venkat").onSnapshot((snapshot)=>{
        //     let tempMovies = snapshot.docs.map((doc)=>{
        //         return {id: doc.id , ...doc.data()}
        //     })
        //     console.log(tempMovies);

        // })
    }, [])



    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home



const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding : 0 calc(3.5vw + 5px);
    position:relative;
    overflow-x:hidden;

    &:before{
        background:url('/images/home-background.png') center center / cover 
        no-repeat fixed;
        content:"";
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;

    }
    
`


