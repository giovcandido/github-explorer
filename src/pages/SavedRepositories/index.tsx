import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import {Header, Title, Repositories} from '../../styles/global';

interface Repository{
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const SavedRepositories: React.FC = () => {
  const [savedRepos] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@github-explorer:repositories');
      if(storagedRepositories){
        return JSON.parse(storagedRepositories);
      }

      return [];
  });

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
      
      <Repositories>
        {savedRepos.map(repository => (
          <Link key={repository.full_name} to={`/repository/${repository.full_name}`}>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
    </>
  )
}

export default SavedRepositories;