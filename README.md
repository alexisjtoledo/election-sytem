# Election system assignment

## Table of contents

- [Election system assignment](#election-system-assignment)
  - [Table of contents](#table-of-contents)
  - [Technologies](#technologies)
  - [How to install](#how-to-install)
  - [Live version](#live-version)
  - [Docker Image](#docker-image)
  - [To-Do's / Improvements](#to-dos--improvements)

## Technologies

-   React
-   Typescript
-   Redux
-   Styled Components
-   CryptoJS

## How to install

1. Clone the project
   `git clone https://github.com/alexisjtoledo/election-system.git`

2. Install dependencies
   `yarn install`

3. Run the app in the development server (local)
   `yarn start`

-   If it doesn't opens automatically, open a web browser and type: [http://localhost:3000](http://localhost:3000)

## Live version

[https://election-system-d745e.web.app/](https://election-system-d745e.web.app/)

_Login accounts:_

-   user: `user1` / password: `user1`
-   user: `user2` / password: `user2`
-   user: `user3` / password: `user3`

## Docker Image

1. Run `docker pull alexistoledo/election-system` to fetch the image.
2. Run `docker run --rm -p 3000:3000 alexistoledo/election-system` to start the app.
3. Access it on [http://localhost:3000](http://localhost:3000)

## To-Do's / Improvements

-   User/Pass validation
-   Error messages
-   Managing and alerts for blank votes
-   Add new media queries to have an even better responsiveness experience on different devices
