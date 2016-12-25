# react-universal-redux-starter-kit
It's the starter kit to build up universal structure of react with redux.
We use as less code as we can to build up universal, I hope you will like it!

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

###_If you use Mac, you need to find your docekr vm ip rather than localhost_

```bash
docker-machine ip
```

## REFERENCE

[erikras/react-redux-universal-hot-example](https://github.com/erikras/react-redux-universal-hot-example)

[kriasoft/react-starter-kit
](https://github.com/kriasoft/react-starter-kit)

