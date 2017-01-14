# react-universal-redux-starter-kit
It's the starter kit to build up universal structure of react with redux.
We use as less code as we can to build up universal, I hope you will like it!

## Before staring it, something you must to know

1. Of course, React, Redux, Isomorphic(Universal), ES6, eslint, npm, node.
2. [redux-thunk](https://github.com/gaearon/redux-thunk) => Help Redux do asynchronized actions.
3. [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) => Help react to do hot reload on client side.
4. [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) => Help you do hot reload in server-side.
5. [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch) => Use fetch in both client and server side.
6. [webpack-isomorphic-tools](https://github.com/halt-hammerzeit/webpack-isomorphic-tools) => Help you deal with some files in isomorphic structure, make it avaible on both client and server side.
7. [dotenv](https://github.com/bkeepers/dotenv) => Help you easily write configs.
8. [extract-text-webpack-plugin](https://github.com/webpack/extract-text-webpack-plugin) Extract all your css in one file for server-side use.
9. Container Design Pattern of React Redux


## Clone repository
Clone the repository

```bash
https://github.com/DumDumGeniuss/react-universal-redux-starter-kit.git react-universal-redux-starter-kit
```
Go into the directory

```bash
cd react-universal-redux-starter-kit
```

## Make it yours
Delete the .git directory

```bash
rm -rf .git
```
Re-initialize the repository

```bash
git init
```

## INSTALL packages

```bash
npm install
```

## DEVELOPMENT MODE

```bash
npm run start:dev
```

## PRODUCTION MODE

```bash
npm run start:prod
```

## ESLINT CHECK

```bash
npm run eslint
```

## DOCKER (optional)

Build up your react application image

```bash
docker build -t react-universal-redux-starter-kit .
```
Create container by the image, and run it, expose port

```bash
docker run -p 3000:3000 -d react-universal-redux-starter-kit
```

Then you can find your app on localhost:3000 (maybe few seconds)

###_If you use Mac, sometimes you need to find your docekr vm ip rather than localhost_

```bash
docker-machine ip
```

## REFERENCE

[erikras/react-redux-universal-hot-example](https://github.com/erikras/react-redux-universal-hot-example)

[kriasoft/react-starter-kit
](https://github.com/kriasoft/react-starter-kit)

## LICENSE
Free, welcome to use it.
