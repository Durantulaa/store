import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const ErrorPage = () => {
  return <Wrapper className='page-100'>
    <section>
    <img src ={logo} className ='logo' alt='St Mary Proj'/>
      <h1>404 Error</h1>
      <h2>Oops! This Page Can't Be Found.</h2>
        <Link to="/" className="btn">
          Return Home
        </Link>
    </section>
  </Wrapper>
}

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`

export default ErrorPage
