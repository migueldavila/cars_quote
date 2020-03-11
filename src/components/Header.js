import React from 'react';
import styled from '@emotion/styled';

const ContainerHeader = styled.header`
  background-color: #26C6DA;
  padding: 10px;
  font-weight: bold;
  color: #FFFFFF;
`
const TitleHeader = styled.h1`
  font-size: 2rem;
  margin: 0px;
  font-family: 'Slabo 27px', serif;
  text-align: center;
`

const Header = ({title}) => {
  return (
    <ContainerHeader>
      <TitleHeader>{title}</TitleHeader>
    </ContainerHeader>
  );
};

export default Header;