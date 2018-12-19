# React Starter Kit

#### For when you're looking to build 'the next big web app'.


[![GitHub tag](https://img.shields.io/github/tag/mcnamee/react-starter-kit.svg?style=flat-square)](https://github.com/mcnamee/react-starter-kit/tags)
[![GitHub contributors](https://img.shields.io/github/contributors/mcnamee/react-starter-kit.svg?style=flat-square)](https://github.com/mcnamee/react-starter-kit/contributors)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/mcnamee/react-starter-kit/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/mcnamee/react-starter-kit.svg?style=flat-square)](https://github.com/mcnamee/react-starter-kit/issues)
[![GitHub closed issues](https://img.shields.io/github/issues-closed/mcnamee/react-starter-kit.svg?style=flat-square)](https://github.com/mcnamee/react-starter-kit/issues-closed)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/mcnamee/react-starter-kit.svg?style=flat-square)](https://github.com/mcnamee/react-starter-kit/issues-pr)

---

[![CryptoTip](https://img.shields.io/badge/Donate%20with-CryptoTip-blue.svg?style=flat&colorB=007bff)](https://cryptotip.it/p/mcnamee)  [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=U7CE3LJYX859E)

---

## 👋 Intro

This boilerplate launches a [React web app](https://reactjs.org/).

The project is _super_ helpful to kick-start your next web app, as it provides a lot of the common tools you may reach for, all ready to go. Specifically:

- __Type checking__
    - [Typescript](https://typescriptlang.org)
- __Flux architecture__
    - [Redux](https://redux.js.org/docs/introduction/)
- __Routing and navigation__
    - [React Router](https://github.com/ReactTraining/react-router) for web
- __Data Caching / Offline__
    - [Redux Persist](https://github.com/rt2zz/redux-persist)
- __UI Toolkit__
    - [Bootstrap](https://getbootstrap.com/) for web

---

## 🚀 Getting Started

```bash
# Install dependencies
yarn install

# Starts are local live-reload server at:
# http://localhost:3000
yarn start
```

Via webpack, starts a localhost server on port 3000 [http://localhost:3000](http://localhost:3000).

- Save code and it auto refreshes
- Install [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) into Chrome to see the state of Redux


#### Bundle the app for production

```bash
yarn run build
```

---

## More information

### File structure

- `/public` contains static assets like the HTML page we're planning to deploy to, or images. You can delete any file in this folder apart from `index.html`.
- `/src` contains our TypeScript and CSS code. `index.tsx` is the entry-point for our file, and is mandatory.
    - `/actions` - Redux Actions - payloads of information that send data _from_ your application _to_ your store. [Read More &rarr;](https://redux.js.org/docs/basics/Actions.html)
    - `/constants` - App-wide variables
    - `/components` - 'Dumb-components' / presentational. [Read More &rarr;](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
    - `/containers` - 'Smart-components' that connect business logic to presentation [Read More &rarr;](https://redux.js.org/docs/basics/UsageWithReact.html#presentational-and-container-components)
    - `/images` - ...
    - `/lib` - Utils and custom libraries
    - `/reducers`- Redux Reducers - Actions dispatch to reducers, which actually change the state [Read More &rarr;](https://redux.js.org/docs/basics/Reducers.html)
    - `/routes`- wire up the router with any & all screens [Read More &rarr;](https://github.com/aksonov/react-native-router-flux)
    - `/store`- Redux Store - hooks up the stores and provides initial/template states [Read More &rarr;](https://redux.js.org/docs/basics/Store.html)
    - `/styles`- all the SCSS you could dream of
    - `index.tsx` - The starting place for our app
    - `react-app-env.d.ts` - default app-wide type definitions
- `/tests` contains all of our tests, where the test file matches the resptive file from `/src`
- `/tsconfig.json` contains TypeScript-specific options for our project.
    - We also have a `tsconfig.prod.json` and a `tsconfig.test.json` in case we want to make any tweaks to our production builds, or our test builds.
- `/tslint.json` stores the settings that our linter, [TSLint](https://github.com/palantir/tslint), will use.

---

## 👊 Further Help?

This repo is a great place to start, but if you'd prefer to sit back and have your new project built for you, [get in touch with me directly](https://mcnam.ee) and I can organise a quote.

