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

   `git clone git@github.com:fatihtelis/react-component-boilerplate.git`

   Navigate the root folder of your component (You can rename the folder if you want in these step)

   `cd react-component-boilerplate`

   Don't forget to remove .git folder and init your own git config.

   `rm -rf .git`  
   `git init`

2. **Install packages**

   You have to install packages before constructing your component in your root folder.

   `npm install`

   or

   `yarn`

3. **Start your development server**

   You can see the basic scripts in `packages.json` file. Use the following command to start your development environment;

   `npm run start`

   or

   `yarn start`

   After starting navigate through `localhost:3000` from your browser's address bar and start building your component right away.

## How to Use

There are 2 folders in the root of the repository, one is `src` and other is `examples`.  
**src** is the main folder for code belongs to your component.  
**examples** is the folder for displaying your component as an HTML page in development.

#### Styles

SASS Loader is added to the project as default style loader. You can add your styles on `src/style.scss` file and it will transpile your .scss file into .css when it is published to /dist folder before publishing to npm.

## Component Test

[Jest](https://jestjs.io/) and [Enzyme](https://airbnb.io/enzyme/) is added for testing the component. You can write your own test on component.test.js file and check the results by running the script;

`npm run test`

or

`yarn test`

## Publishing your React Component to npm

You have to transpile your code with Babel before publishing it to npm. **prepublishOnly** script auto-transpile the code before publishing. So, you only need to publish your component to the npm directory. You have to login to your npm account first from terminal first:

`npm login`

After signing in, you are ready for the last step.

`npm publish`

## Deploy your React Component Demo to GitHub Pages

[GitHub Pages](https://pages.github.com/) offers developers to deploy their open source project demos into their directory. You can use the following scripts to deploy your demos into Github Pages.

`npm run publish:gh-pages`

or

`yarn publish:gh-pages`

It opens a new branch in your project called 'gh-pages' and publishes your demo. You can access your demo link from:

`https://<github-username>.github.io/<github-repo-name>/`

For this repo, the demo is available at:

[https://fatihtelis.github.io/react-component-boilerplate/](https://fatihtelis.github.io/react-component-boilerplate/)

## Auto-deploy to Github Pages with Travis CI

If you don't want to update your component demo manually on GitHub Pages by running "publish:gh-pages" script each time you make a change on your repo, you may use [Travis CI](https://travis-ci.org/) integration.

`.travis.yml` file includes a configuration to publish your code to GitHub pages. All you need to do is adding a variable called "GITHUB_TOKEN" to Travis CI dashboard from settings of related repo. You can generate the token from GitHub by navigating "Settings > Developer Settings > Personal access tokens".

When you push your code to master branch on GitHub, Travis CI will publish your demo on GitHub Pages if the repo is builded successfully and passing tests. For details about Travis CI, please check:

[Travis CI Docs for GitHub Pages Deployment](https://docs.travis-ci.com/user/deployment/pages/)
