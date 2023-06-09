import React, {useEffect } from 'react'

import {auth,provider} from '../firebase';


import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom';
import {
    selectUserName,
    selectUserPhoto,
    setUserLogin,
    setSignOut,

} from "../features/user/userSlice"
import { useSelector, useDispatch } from 'react-redux' ;


function Header() {
    const dispatch = useDispatch();
    const history = useHistory();

    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    console.log(userPhoto);

    // useEffect(()=>{
    //     auth.onAuthStateChanged(async(user)=>{
    //         if(user){
    //             dispatch(setUserLogin({
    //                 name:"Vjvenkat",
    //                 email:user.email,
    //                 userPhoto: "https://lh3.googleusercontent.com/a/AGNmyxblI_psk-jYaGplQTUncJzS44CoeA8GuDdW8d0m=s96-c", 
    //         }))
    //         history.push("/");

    //         }
    //     })
    
    // },[])


    useEffect(()=>{
        dispatch(setUserLogin({
            name:"Vjvenkat",
            email:"vjvenkatbsc@gmail.com",
            photo:"https://lh3.googleusercontent.com/a/AGNmyxblI_psk-jYaGplQTUncJzS44CoeA8GuDdW8d0m=s96-c",
        }))
        history.push("/");
    },[])

    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            console.log(result);
            let user= result.user;
            dispatch(setUserLogin({
                name:user.displayName,
                email:user.email,
                userPhoto:user.photoURL, 
            }))
            history.push("/");
        })
        
    }


    const signOut= ()=>{
        auth.signOut()
        .then(()=>{
            dispatch(setSignOut)
            history.push("/login");
        })
    }

  return (
    <Nav>
        <Logo src="/images/logo.svg"/>
        {!userName ? (
            <LoginContainer>
        <Login onClick={signIn}>Login</Login>
        </LoginContainer> ) :
        <>
        <NavMenu>
            <a>
            <img src='/images/home-icon.svg'></img>
            <span>HOME</span>

            </a>
            <a>
            <img src='/images/search-icon.svg'></img>
            <span>SEARCH</span>

            </a>
            <a>
            <img src='/images/watchlist-icon.svg'></img>
            <span>WATCHLIST</span>

            </a>
            <a>
            <img src='/images/original-icon.svg'></img>
            <span>ORIGINALS</span>

            </a>
            <a>
            <img src='/images/movie-icon.svg'></img>
            <span>MOVIES</span>

            </a>
            <a>
            <img src='/images/series-icon.svg'></img>
            <span>SERIES</span>

            </a>
            
                

        </NavMenu>

        <UserImage src={userPhoto} onClick={signOut} />
        
        </>

        }
        
    </Nav>
  )
}

export default Header


const Nav=styled.nav`
    height : 70px;
    background-color:#090b13;
    display : flex;
    align-items:center;
    padding:0 36px;
    overflow-x:hidden;
`

const Logo =styled.img  `
width:  80px;

`


const NavMenu = styled.div`
display:flex;
flex:1;
margin-left:25px;
align-items:center;
a{
    display:flex;
    align-items:center;
    padding:0 12px;
    cursor:pointer;

    img{
        height:20px;
    }
    span{
        font-size:13px;
        letter-spacing: 1.42px;
        position:relative;


        &:after{
            
            content:"";
            height:2px;
            background:white;
            position:absolute;
            left:0;
            right:0;
            bottom:-6px;
            opacity:0;
            transform-origin:left center;
            transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;     //transition: transform 0.25s ease-out;
            transform: scaleX(0);
            
        }
    }

    &:hover{
        span:after{
            transform:scaleX(1);
            opacity:1;
        }
    }
}

`


const UserImage = styled.img`

width :48px;
height:48px;
border-radius:50%;  //30px
cursor:pointer;
`



const Login =styled.div`
    border:1px solid #f9f9f9;
    padding:8px 16px;
    border-radius: 4px;
    letter-spacing:1.5px;
    text-transform: uppercase;
    background-color:rgba(0,0,0,0.6);
    cursor:pointer;
    transition:all 0.25s ease 0s;

    &:hover{
        background-color:#f9f9f9;
        color:#000;
        bordor-color:transparent;
    }
`
const LoginContainer = styled.div`
    flex:1;
    display:flex;
    justify-content:flex-end;
`