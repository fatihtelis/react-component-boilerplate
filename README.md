# A Boilerplate for Publishing Basic React Components to NPM

If you want to create basic React components and publish them into [npm](https://www.npmjs.com/) as an open source project without spending time on configuration, you can simply follow the steps and publish your own component.

### How to Install

1. **Clone to repository into your local device**  
   First of all, you have to clone the repository in your own working environment to get started.  
   `git clone git@github.com:fatihtelis/react-component-boilerplate.git`  
   Navigate the root folder of your component (You can rename the folder if you want in these step)  
   `cd react-component-boilerplate`
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

### How to Use

There are 2 folders in the root of the repository, one is `src` and other is `examples`.  
**src** is the main folder for code belongs to your component.  
**examples** is the folder for displaying your component as an HTML page.

SASS Loader is added to the project as default style loader. You can add your styles on `src/style.scss` file and it will transpile your .scss file into .css when it is published to /dist folder before publishing to npm.
