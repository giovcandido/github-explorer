import React, {useState, useEffect, FormEvent} from 'react';
import {Link} from 'react-router-dom';
import {FiChevronRight} from 'react-icons/fi';

import api from '../../services/api';
import logo from '../../assets/logo.svg';

import {Header, Title, Repositories} from '../../styles/global';
import {Form, Error} from './styles';

interface Repository{
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepoSearch, setNewRepoSearch] = useState('');
  const [inputError, setInputError] = useState('');
  const [searchResult, setSearchResult] = useState<Repository[]>([]);

  // const [repositories, setRepositories] = useState<Repository[]>(() => {
  //   const storagedRepositories = localStorage.getItem('@github-explorer:repositories');
  //     if(storagedRepositories){
  //       return JSON.parse(storagedRepositories);
  //     }

  //     return [];
  // });

  // useEffect(() => {
  //   localStorage.setItem('@github-explorer:repositories', JSON.stringify(repositories));
  // }, [repositories]);

  async function handleNewRepoSearch(event: FormEvent<HTMLFormElement>): Promise<void>{
    event.preventDefault();

    if(!newRepoSearch){
      setInputError('Type in a repository to be searched.');
      return;
    }
    
    try{
      const response = await api.get(`search/repositories?q=${newRepoSearch}&per_page=50&sort=stars&order=desc`);

      const repositories: Repository[] = response.data.items;
      
      setSearchResult([...repositories]);

      setNewRepoSearch('');
      setInputError('');
    }catch(err){
      console.log(err);
      setInputError('No repository was found. Try using other words.');
    }
  } 

  return (
    <>
       <Header>
        <img src={logo} alt="GitHub Explorer" />
        <Link to="/saved">
          <FiChevronRight size={16} />
          Saved Repositories
        </Link>
      </Header>

      <Title>Explore repositories on GitHub</Title>

      <Form hasError={Boolean(inputError)} onSubmit={handleNewRepoSearch}>
        <input value={newRepoSearch} onChange={(e) => setNewRepoSearch(e.target.value)} 
        placeholder="Type in the repository name here" />

        <button type="submit">Search</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {searchResult.map(repository => (
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

export default Dashboard;