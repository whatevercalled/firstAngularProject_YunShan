# MyFirstProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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

# custom note
angular.json ->cli reference   
.editorconfig -> visual studio code editor config
app.component.spec.ts -> unit testing 定義如何測試component
assets folder -> static for example: css image
.gitkeep -> empty folder will not push onto github should have a gitkeep file to maintain ci/cd
spec.ts -> unit testing file 
# 三種directive 指令：

1. 元件型指令：為了區分每一個元件上都會有一個attribute
2. ngstyle or ngclass:can change the appearance of component
3. ngif ngfor ngswitch is structure directive which can control dom structure 
4. app.config.ts 需要加入provideHttpClient() 否則service httpclient 無法使用 應是以往module 使用到的httpClientModule 