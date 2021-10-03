import React from 'react';
import styled from 'styled-components'

const ButtonStyle = styled.button`
  background: #47CA26;
  color: white;
  border-radius: 6px;
  border:none;
  padding: 8px 16px;
  cursor: pointer;
  &:hover {
    background: #47B92B;
  }
`

/**
 * Button component
 */
const Button = (props) => {
  return (
    <ButtonStyle>
      {props.children}
    </ButtonStyle>
  );
};

export default Button