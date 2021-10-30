# Front-End Coding Challenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Task

Create a simple interface for viewing the latest Batman movies as a vertical list of ten movies which can also be filtered by decade.

A UI mockup can be found in the included `moviemock.sketch` file (or `moviemock.pdf` if you don't have Sketch).
Only one movie is shown in the mockup, but use that as a template for the other 9.

Abstract provides an alternative method for inspecting the Sketch file, without needing a license. Refer here if you do not have access to Sketch.
https://app.abstract.com/share/594bed29-aefe-4d75-a351-3fb584c101db?mode=design&selected=root-0170DE38-5342-41C9-BDC6-3F4AE100D08B&sha=0b9ce076dbcd559c1e3bafa259b473d2ff0502c6

* If there are issues with the Abstract link, please reach out to the hiring manager.

## Requirements
* Build using the latest version of Angular.
* Use SASS to write your CSS and compile it down.
* Write your JavaScript using either vanilla JS or using TypeScript and compile it down.
* Build and include at least one Angular component.
* Make sure your code is supported by Chrome, FF, and IE11.
* Publish your completed project to a Github repo, and provide us with a link.

## APIs

Sign up for a free api key to use the Movie service here:
http://www.omdbapi.com/apikey.aspx

Using the first 10 results of this api search for batman movies:
http://www.omdbapi.com/?s=Batman

Take those results and look up details for each movie returned using this api pattern:
http://www.omdbapi.com/?i=tt0372784 (where i = the IMDB id found above)

Hint: Images might be blocked from hotlinking. If so, manually download all of those images to the project first, then reference them locally (parse the url string from the response).
