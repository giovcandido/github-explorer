import React from 'react';
import {useRouteMatch, Link} from 'react-router-dom';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import {Header, RepositoryInfo, Issues} from './style';

interface RepositoryParams{
  repository: string;
}

const Repository: React.FC = () => {
  const {params} = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img src="null" alt="owner avatar"  />
          <div>
            <strong>Repository: {params.repository}</strong>
            <p>Repo description</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>StarsNum</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>ForksNum</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>OpenIssuesNum</strong>
            <span>Open Issues</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="nowhere">
          <div>
            <strong>Issue</strong>
            <p>Issue issue</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  )
}

export default Repository;