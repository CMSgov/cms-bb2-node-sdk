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

3. Consuming from the sample client

   This process should definitely be reworked for a better dev experience. Currently there are a lot of manual steps.

   Build the project using the instructions below:

   ```
   yarn build
   yarn build:types
   ```

   The yarn build:types is to create the index.d.ts, which is used for type checking throughout the project. While during startup, it may not error out, there
   can be issues during runtime. It is to ensure that the types of everything used in the project are consistent.

   Copy each file from the dist folder after the build. You will have:

   cms-bluebutton-sdk.cjs.js
   cms-bluebutton-sdk.esm.js
   cms-bluebutton-sdk.umd.js
   index.d.ts

   The three files are used so that the sdk can be used in a variety of projects, such as a module or in a browser.

   In the sample-client, you will then create a folder within the server folder location. Name the folder something like node-sdk.
   Copy the entire contents of the dist folder into the newly created node-sdk folder.
   Put the .js files into a new dist folder within the node-sdk folder.
   Back in this repo (cms-bb2-node-sdk) copy the package.json into the sample client's node-sdk folder.
   This entire process is to allow the sdk to be locally referenced while inside the Docker container. Ideally, there would be a more elegant way to do this.

   The folder structure will look like this:

   ```
    server
    └───node-sdk
    │   │   index.d.ts
    │   │   package.json (THIS IS THE ONE FROM THIS SDK REPO)
    │   └───dist
    │       │   cms-bluebutton-sdk.umd.js
    │       │   ms-bluebutton-sdk.esm.js
    │       │   cms-bluebutton-sdk.cjs.js
   ```

   Within the sample client in the server folder, there is another package.json (Note: NOT the one in node-sdk) This package.json will have

   "cms-bluebutton-sdk": "^{version}",

   Replace the version with "file:node-sdk" to use the locally created node-sdk folder from previous steps. This will allow you to see changes to this repo.
