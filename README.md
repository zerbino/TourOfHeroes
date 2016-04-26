# Angular 2 Tour of Heroes tutorial

This repository holds the code resulting from the Angular 2.0 Tour of Heroes tutorial. It follows the steps suggested
by tutorial hosted at https://angular.io/docs/ts/latest/tutorial/

The structure is that of the angular 2 QuickStart sample hosted at https://github.com/angular/quickstart/blob/master/README.md
The architecture is not designed for production.
 
Run the project:

## Clone the git repo:

git clone https://github.com/zerbino/TourOfHeroes.git

## Install npm packages

Install the npm packages described in the `package.json` and verify that it works:

```bash
npm install
npm start
```

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with Ctrl-C.

## Evolutions 

The initial quick start project contains unit tests and e2e tests that are not relevant to the app, yet. We'll complete
them with relevant code while the code evolves.
