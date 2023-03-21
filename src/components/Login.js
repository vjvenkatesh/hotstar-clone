import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <BackgroundImage>
        <ContentBox>
            <CTALogoOne src="/images/cta-logo-one.svg"/>
            <SignUp>
                GET ALL THERE
            </SignUp>
            <Description>
               Shi's mom helped out behind the scenes "Neiman-Cobb says, so Shi's own mother was enlisted to teach the artists how to make dumplings from scratch.
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png"/>
        </ContentBox>
    </BackgroundImage>
  )
}

export default Login

const BackgroundImage = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display:flex;
    align-items:center;
    justify-content:center;
    
    
    &:before{
        background-position:top;
        background-size:cover;
        background-repeat:no-repeat;
        background-image: url("/images/login-background.jpg");
        position:absolute;
        content:"";
        top:0;
        bottom:0;
        left:0;
        right:0;
        z-index:-1;
        opacity:0.7;
    }
`



const ContentBox = styled.div`
    max-width: 650px;
    padding:80px 40px;
    width:90%;
    display:flex;
    flex-direction:column;
    margin-top:100px;
    align-items:center;
    
    
    



`



const CTALogoOne =styled.img`   

`


const SignUp = styled.a`
    width:100%;
    background-color:#0063e5;
    font-weight:bold;
    padding:17px 0;
    color : #f9f9f9;
    border-radius:4px;
    text-align:center;
    font-size:18px;
    cursor:pointer;
    transition:all 250ms;
    letter-spacing:1.5px;
    margin-top:8px;
    margin-bottom:12px;

    &:hover{
        background:#0483ee;
    }
`


const Description =styled.p`
    font-size:11px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;
`



const CTALogoTwo =styled.img`
    width:90%;

`