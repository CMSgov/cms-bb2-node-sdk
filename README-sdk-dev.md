# Blue Button 2.0 SDK Development Documentation

## Introduction

This README contains information related to developing the SDK.

It is intended for BB2 team members or others performing SDK development work.

## Development Environment Setup:

### Install node and npm and yarn

npm recommends install node using nvm (node version manager), for install instruction, check out: https://github.com/nvm-sh/nvm


```
check nvm version:
nvm -v

install node (this also install npm)
nvm install node

check node version
node -v

check npm version
npm -v

install yarn
npm install --global yarn

check yarn version
yarn -v
```

## Developing the SDK

### Installing Development Dependencies

From the repository base directory:

```
yarn install
```

### Running Tests and Linting Code and Generating Ts Docs

From the repository base directory:

```
run tests
yarn test

code linting
yarn lint

generate ts docs
yarn docs
```

## Packaging and Publishing

### Build Package

To build the cms_bluebutton package do the following:

From the repository base directory:

```
build package:
yarn build

generate typescript types:
yarn build:types
```

The resulting distribution files with be created in the `dist/` directory.

### Consuming SDK Package

Consume locally (as a good test before publishing):

After built and generated typescript types (needed if to be consumed by typescript project), the sdk can be consumed by other projects as shown by below example:

```
mkdir my_proj
cd my_proj
yarn init
yarn add <path to local cms-bluebutton-sdk local repository base directory>

continue adding other dependencies, e.g. express, ts-node, etc., ...

yarn add express @types/express ts-node
yarn add <other dependencies>
```

