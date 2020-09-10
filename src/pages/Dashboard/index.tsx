import React, {useState, FormEvent} from 'react';
import {FiChevronRight} from 'react-icons/fi';

import api from '../../services/api';
import logo from '../../assets/logo.svg';

import {Title, Form, Repositories, Error} from './styles';

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
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleNewRepoSearch(event: FormEvent<HTMLFormElement>): Promise<void>{
    event.preventDefault();
    
    if(!newRepoSearch){
      setInputError('Type in a repository to be searched. Format: author/repo_name.');
      return;
    }
    
    try{
      const response = await api.get<Repository>(`repos/${newRepoSearch}`);
  
      const repository = response.data;
      
      setRepositories([...repositories, repository]);
      
      setNewRepoSearch('');
      setInputError('');
    }catch(err){
      setInputError('Cannot find the given repository. It may not exist.');
    }
  } 

  return (
    <>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore repositories on GitHub</Title>

      <Form hasError={Boolean(inputError)} onSubmit={handleNewRepoSearch}>
        <input value={newRepoSearch} onChange={(e) => setNewRepoSearch(e.target.value)} 
        placeholder="Type in the repository name here" />

        <button type="submit">Search</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}
      
      <Repositories>
        {repositories.map(repository => (
          <a key={repository.full_name} href="teste">
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard;