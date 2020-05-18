# WildBeast Documentation

This documentation is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
$ npm i
```

#### IMPORTANT: Dumping command information from WildBeast

A prerequisite for being able to generate command documentation at either development or build time is that command information from WildBeast has been dumped before starting the development server or build process, both of which are detailed below.

Command information can be dumped using the [`dump-command-info`](scripts/dump-command-info.js) script. Per default, this script assumes that a WildBeast (v7.x) repository is cloned on the same level as this repository, i.e. the default path the script will look for the WildBeast source code in is `../WildBeast`. This path may be changed in [`package.json`](package.json), should that be necessary.

You can easily achieve this by shallow cloning WildBeast as follows:

```
$ git clone -–depth 1 https://github.com/TheSharks/WildBeast.git
```

**Note:** You may also do a full depth clone of course, the above method just describes the minimum requirement for getting this repository up and running!

Once your environment meets the above stated requirements, you just need to run the following command:

```
$ npm run dump-command-info
```

After this, a `command-info.json` file will be present in the `data` folder in the root of this repository, and you can now get started with working the documentation!

### Local Development

```
$ npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
