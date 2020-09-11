import React from 'react';
import {Link} from 'react-router-dom';
import {FiChevronLeft} from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import {Header, Title} from '../../styles/global';

const SavedRepositories: React.FC = () => {
  return (
    <>
      <Header>
        <img src={logo} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Dashboard
        </Link>
      </Header>

      <Title>Here are your saved repositories</Title>
    </>
  )
}

export default SavedRepositories;