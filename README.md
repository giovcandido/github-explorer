# GitHub Explorer

<p align="center">
    <img src="https://github.com/giovcandido/github-explorer/blob/master/demos/demo.gif" alt="GitHub Explorer in action">
</p>

Explore GitHub repositories freely. It's really free.

## Contents

- [About](#about)
- [Usage](#usage)
- [Installation](#installation)
- [Contribute](#contribute)
- [More](#more)

## About

GitHub repository explorer is a web app that lets you browse any public repository and automatically saves them to your local storage so you can easily find them later. It's made with ReactJS through GitHub public API.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

In order to use it, you have to download it to your machine and follow the installation process.

After installation, open the web app and serching for the repository you want to get information about. If the search is successful, a repository card shows up in the front page. Otherwise, you may see an error message.

Bear in mind you have to search repositories using the format: username/reponame, where _username_ is the GitHub user that owns the repository and _reponame_ is the name of the repository.

The repositories are stored to your browser local storage. If want to delete your search results, you have to wipe the local storage manually.

You can click in a repository card to go to another page with more information about the repository.

No API key is required in order to run the web app, so chill out.

## Installation

Clone the repository or download the source code to your machine.

After having the the app locally, you can run it with _yarn_.

In order to do so, first you need to install yarn. Check the installation process [here](https://classic.yarnpkg.com/lang/en/docs/install/).

Now, with yarn installed, open the source code directory in your terminal and run:
```bash
yarn install
```

Now, all you have to do is running:
```bash
yarn start
```

## Contribute

Feel free to reach out and contribute. We can add more features to GitHub Explorer.

## More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
