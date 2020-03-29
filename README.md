# sudbasnet.github.io
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Deploying app to your username.github.io page
It took me quite a while to figure out how to deploy this application to github pages. The documentation in Angular's offical page allows you to deploy various applications to github pages by creating a page of the format **\<username\>.github.io/\<app-name\>**. Its not really difficult, but I needed something efficient and clean. I found a very [helpful page](https://itnext.io/create-your-website-for-free-with-github-pages-angular-4a932a2de309) created by [Dale Nguyen](https://itnext.io/@dalenguyen). I have tried to explain what I did here.

### Create a new branch
The default github pages can only be hosted on the `master` branch. So we will create a new development branch that we will use as the default branch. We will use the `master` branch to only store the production files of the project. This will be auto populated by the `angular-cli-ghpages`. I have created a `dev` branch in my empty repository.

### Create project
In the empty repository, create a new angular project, put the project in the same folder that you've checked out.
```
git checkout dev
ng new <project-name> --directory ./
```
Update the *outputPath* in `angular.json` to something like *dist* or *docs*.

### Install `angular-cli-ghpages`
```
npm install -g angular-cli-ghpages
```
Documentation: https://github.com/angular-schule/angular-cli-ghpages

### Build the project 
```
ng build --prod --base-href 'https://sudbasnet.github.io/'
```
Commit the changes and push to `dev`. push the production files to `master`.
```
angular-cli-ghpages -b master
```
