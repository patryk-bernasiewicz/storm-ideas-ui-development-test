# Web UI Development Test App

This is a simple repository for a developer test.

## Table of contents

1. [Stack](#stack)
2. [Installation](#installation)
3. [Folder structure overview](#folder-structure-overview)
4. [Additional notes](#additional-notes)

## Stack

This React app uses following libraries:

- React 17
- TypeScript
- styled-components (+ styled-normalize)
- Axios
- MirageJS
- Storybook
- Faker
- date-fns
- rc-table
- qs

It's also built using Yarn 1 and is based on [my own CRA template](https://www.npmjs.com/package/cra-template-patrykb) that integrates Eslint, Prettier, Husky and cross-env.

## Installation

Simply clone the repository using

```
git clone <todo: fill out>
cd <repo-name>
yarn
```

## Folder structure overview

This project uses the following folder structure:

```
├── /src
│   ├── /components
│   ├── /constants
│   ├── /pages
│   ├── /svg
│   ├── /utils
│   ├── App.tsx
```

### /components

This folder contains all globally used and shared components in the application. The main global/shared components are using default export (`export default Component`) and their child components are always exported using named exports (`export const Component`). Child components cannot be used outside of their main components.

### /constants

Files exporting different contants - typically the navigation config and API routes.

### /pages

Components that define pages used in routing. They are exported using default export, and can have their own child components which cannot be imported from or used by any other component in the project.

### /svg

This folder contains all icons and other SVG images. They can be imported from anywhere in the app using `import { ReactComponent as IconName } from 'svg/file-name.svg'`.

### /utils

This folder contains different utilities used in the app - functions that are configured and ready to connect to the API, preconfigured Axios instance, theme definition or other useful stuff.

## API

This project uses MirageJS to mock the real API connections. In the `server.ts` script we create a fake API server that runs in the browser's memory,and is able to intercept application's HTTP requests and return data just like a real HTTP API service. It also uses Faker to create a repository of Stories for our application.

## Additional notes

- DataTable component - I decided to use a table library that gave the most freedom in styling and structure of the table. It seemd like `rc-table` was the best choice, though later in the development it showed to be lacking some important features that I needed to add manually (like sorting).  
  It's also made in a way that it handles the state of the fetched data, pagination, sorting etc. and only expects a function passed as the `fetchData` prop that will make the API request. This approach allows us to maintain a unified way of fetching tabular data and provides an opinionated method of handling similar cases.  
  This approach is, of course, not free from caveats and would not work had the API needed to use more flexible schema.
