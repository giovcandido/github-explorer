import React from 'react';
import {FiChevronRight} from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import {Title, Form, Repositories} from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore repositories on GitHub</Title>

      <Form>
        <input placeholder="Type in the repository name here" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/22887344?s=460&u=fb61edb1343dad0e3b10c4b62c097136bc1e060e&v=4" alt="Giovani Eu" />
          <div>
            <strong>github-explorer</strong>
            <p>GitHub repository explorer made with ReactJS using the GitHub API</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/22887344?s=460&u=fb61edb1343dad0e3b10c4b62c097136bc1e060e&v=4" alt="Giovani Eu" />
          <div>
            <strong>github-explorer</strong>
            <p>GitHub repository explorer made with ReactJS using the GitHub API</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://avatars3.githubusercontent.com/u/22887344?s=460&u=fb61edb1343dad0e3b10c4b62c097136bc1e060e&v=4" alt="Giovani Eu" />
          <div>
            <strong>github-explorer</strong>
            <p>GitHub repository explorer made with ReactJS using the GitHub API</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;