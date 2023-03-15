import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';


const Auth = styled.div`
position: fixed;
top: 50%;
left: 50%;
background: green;
width: 400px;
height: 320px;
display: flex;
justify-items: center;
align-items: center;
`
const SBtn = styled.button`
width: 80%;
height: 100px;
font-size: 32px;
padding: 20px;
`
const AuthTemplate = ({ authenticate }) => {
  const history = useHistory();

  return (
    <Auth> 
      <SBtn type="button" onClick={() => {
        authenticate();
        history.push('/main');
       
      }}>CLICK TO AUTHENTICATE!</SBtn>
    </Auth>
  )
}

export default AuthTemplate;
