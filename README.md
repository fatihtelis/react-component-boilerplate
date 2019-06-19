# A Boilerplate for Publishing Basic React Components to npm

If you want to create basic React components and publish them into [npm](https://www.npmjs.com/) as an open source project without spending time on configuration, you can simply follow the steps and publish your own component.

- [How to Install](#how-to-install)
- [How to Use](#how-to-use)
- [Component Test](#component-test)
- [Publishing your React Component to npm](#publishing-your-react-component-to-npm)
- [Deploy your React Component Demo to GitHub Pages](#deploy-your-react-component-demo-to-github-pages)
- [Auto-deploy to Github Pages with Travis CI](#auto-deploy-to-github-pages-with-travis-ci)

## How to Install

1. **Clone to repository into your local device**

   First of all, you have to clone the repository in your own working environment to get started.

   ```bash
   git clone git@github.com:fatihtelis/react-component-boilerplate.git
   ```

   Navigate the root folder of your component (You can rename the folder if you want in these step)

   ```bash
   cd react-component-boilerplate
   ```

   Don't forget to remove .git folder and init your own git config.

   ```bash
   rm -rf .git
   git init
   ```

2. **Install packages**

   You have to install packages before constructing your component in your root folder.

   ```bash
   npm install
   ```

   or

   ```bash
   yarn
   ```

3. **Start your development server**

   You can see the basic scripts in `packages.json` file. Use the following command to start your development environment;

   ```bash
   npm run start
   ```

   or

   ```bash
   yarn start
   ```

   After starting navigate through `localhost:3000` from your browser's address bar and start building your component right away.

## How to Use

There are 2 folders in the root of the repository, one is `src` and other is `examples`.  
**src** is the main folder for code belongs to your component.  
**examples** is the demo folder for displaying your component as an HTML page in localhost:300 on development and on GitHub pages.

#### Styles

SASS Loader is added to the project as default style loader. You can add your custom component styles in `src/component.scss` file and it will transpile your .scss file into .css when it is published to /dist folder before publishing to npm. Users can access and import the custom styles by importing;

## Component Test

[Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) is added for testing the component. You can write your own test on component.test.js file and check the results by running the script;

```bash
npm run test
```

or

```bash
yarn test
```

## Publishing your React Component to npm

You have to transpile your code with Babel before publishing it to npm. **prepublishOnly** script auto-transpile the code before publishing. So, you only need to publish your component to the npm directory. You have to login to your npm account first from terminal first:

```bash
npm login
```

After signing in with your username, password and email address, you are ready for the last step.

```bash
npm publish
```

## Deploy your React Component Demo to GitHub Pages

[GitHub Pages](https://pages.github.com/) offers developers to deploy their open source project demos into their directory. You can use the following scripts to deploy your demos into Github Pages.

```bash
npm run publish:gh-pages
```

or

```bash
yarn publish:gh-pages
```

It opens a new branch in your project called 'gh-pages' and publishes your demo. You can access your demo link from:

`https://<github-username>.github.io/<github-repo-name>/`

For this repo, the demo is available at:

[https://fatihtelis.github.io/react-component-boilerplate/](https://fatihtelis.github.io/react-component-boilerplate/)

## Auto-deploy to Github Pages with Travis CI

If you don't want to update your component demo manually on GitHub Pages by running "publish:gh-pages" script each time you make a change on your repo, you may use [Travis CI](https://travis-ci.org/) integration.

`.travis.yml` file includes a configuration to publish your code to GitHub pages. All you need to do is adding a variable called "GITHUB_TOKEN" to Travis CI dashboard from settings of related repo. You can generate the token from GitHub by navigating "Settings > Developer Settings > Personal access tokens".

When you push your code to master branch on GitHub, Travis CI will publish your demo on GitHub Pages if the repo is builded successfully and passing tests. For details about Travis CI, please check:

[Travis CI Docs for GitHub Pages Deployment](https://docs.travis-ci.com/user/deployment/pages/)
