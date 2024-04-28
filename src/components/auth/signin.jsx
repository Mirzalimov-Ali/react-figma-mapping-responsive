import React from 'react'
import { CheckBox, CreateAccountButton, LoginBox, LoginContainer, LoginInput, LoginLines, SignInButton, SpaceBetweenWrapper } from '../../style'
import socialImgs from '../../assets/login-social.png'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    <LoginContainer>
      <LoginBox>
        <h2>Sign in</h2>
        <label htmlFor="email">Email</label>
        <LoginInput type='email' id='email' placeholder='Your email'/>

        <label htmlFor="pwd">Password</label>
        <LoginInput type='password' id='pwd' placeholder='Your password'/>

        <SpaceBetweenWrapper>
          <div>
            <CheckBox type='checkbox' id='keep-me'/>
            <label htmlFor='keep-me'>Keep me logged in</label>
          </div>
          <div>
            <p>Forget your password ?</p>
          </div>
        </SpaceBetweenWrapper>

        <SignInButton>sign in</SignInButton>
        <div style={{display: 'flex', justifyContent: 'center', gap: "10px", alignItems: 'center'}}> 
          <LoginLines/>
          <p style={{opacity: "0.7"}}>OR</p>
          <LoginLines/>
        </div>

        <div style={{display: "flex", justifyContent: "center", margin: "20px"}}>
          <img src={socialImgs} alt=""/>
        </div>

        <Link to={"/signup"}>
          <CreateAccountButton>create account</CreateAccountButton>
        </Link>
      </LoginBox>
    </LoginContainer>
  )
}

export default Signin
