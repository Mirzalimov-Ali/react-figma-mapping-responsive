import React from 'react'
import { CheckBox2, CreateAccountButton, LoginBox, LoginContainer, LoginInput, LoginLines, SignInButton, SpaceBetweenWrapper } from '../../style'
import { Link } from 'react-router-dom'
import closeImg from '../../assets/close-icon.png'

function Registrate() {
  return (
    <LoginContainer>
      <LoginBox $short>
        <div style={{display: "flex", alignItems: "center", justifyContent: 'space-between', marginBottom: "20px"}}>
          <h2 style={{margin: "0"}}>Registrate</h2>
          <Link to={"/"}><img src={closeImg} alt="" /></Link>
        </div>
        <label htmlFor="email">Email</label>
        <LoginInput type='email' id='email' placeholder='Your email'/>

        <label htmlFor="pwd">Password</label>
        <LoginInput type='password' id='pwd' placeholder='Your password'/>

        <label htmlFor="repeatPwd">Repeat your password</label>
        <LoginInput type='password' id='repeatPwd' placeholder='Your password'/>

        <SpaceBetweenWrapper>
          <div>
            <CheckBox2 type='checkbox' id='keep-me'/>
            <label htmlFor='keep-me'>Keep me logged in</label>
          </div>
        </SpaceBetweenWrapper>

        <SignInButton>REGISTRATE</SignInButton>
      </LoginBox>
    </LoginContainer>
  )
}

export default Registrate
