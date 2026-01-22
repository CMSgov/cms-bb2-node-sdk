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

### Publish SDK

To publish the sdk, at the base directory of the SDK local repositoriy, run the following npm command:

```
npm publish
```

Note that a package can be published as 'private' in alternative ways, e.g., just run:

```
mkdir my_proj
cd my_proj
npm init --scope=@cms-bluebutton-dev
...
```

This will create a pacakge project 'my_proj' with organization scope (private), or:

```
npm config set init-private true
mkdir my_proj
cd my_proj
yarn init
...
```

Setting npm config global settings will make subsequently created pacakge projects 'private'.

Note that publishing package 'private' is a npm option that requires payment.

### Consuming SDK

1. Consuming from npm registry:

   ```
   mkdir my_proj
   cd my_proj
   yarn init
   yarn add cms-bluebutton-sdk

   continue adding other dependencies, e.g. express, ts-node, etc., ...

   yarn add express @types/express ts-node
   yarn add <other dependencies>
   ```

2. Consuming from a local SDK repository (as a good test before publishing):

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

# It is known that there are traces of yarn being used in this repo, however Snyk currently blocks the merge of yarn 1.22.22 despite it being the latest version due to the fact that there is a security vulnerability. The steps listed here can still be followed after running:

    ```
    npm install yarn
    ```

# In the future, we would like to move to using only a single package manager.
