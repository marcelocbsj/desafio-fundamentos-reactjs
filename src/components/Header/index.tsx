import React from 'react';

import { Link } from 'react-router-dom';

import { FiArchive, FiFileMinus } from 'react-icons/fi';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <Link to="/">
          <FiFileMinus />
          Listagem
        </Link>
        <Link to="/import">
          <FiArchive />
          Importar
        </Link>
      </nav>
    </header>
  </Container>
);

export default Header;
