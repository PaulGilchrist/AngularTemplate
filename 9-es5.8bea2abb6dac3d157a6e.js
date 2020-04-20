function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+DDA":function(e,t,n){"use strict";n.r(t),n.d(t,"HelpModule",(function(){return _}));var a,s=n("tyNb"),o=n("ofXK"),i=n("fXoL"),r=function(){return["topic-gettingStarted"]},b=function(){return["topic-serverLibraries"]},c=function(){return["topic-clientLibraries"]},l=function(){return["topic-npmCommands"]},d=function(){return["topic-vsCodeCommands"]},p=function(){return["topic-gitBranching"]},u=function(){return["topic-vstsDeploy"]},h=((a=function(){function e(t,n){_classCallCheck(this,e),this._location=t,this._router=n}return _createClass(e,[{key:"currentPage",value:function(e){var t=this._location.path();return 0===e.length?0===t.length:t===e}}]),e}()).\u0275fac=function(e){return new(e||a)(i.Mb(o.f),i.Mb(s.c))},a.\u0275cmp=i.Gb({type:a,selectors:[["app-help-nav"]],decls:23,vars:28,consts:[[1,"animated","slideInLeft","w-100"],[1,"nav","nav-pills","d-flex","flex-column","align-items-start","w-100"],[1,"nav-item"],[1,"nav-link",3,"routerLink"]],template:function(e,t){1&e&&(i.Rb(0,"nav",0),i.Rb(1,"ul",1),i.Rb(2,"li",2),i.Rb(3,"a",3),i.sc(4,"Getting Started"),i.Qb(),i.Qb(),i.Rb(5,"li",2),i.Rb(6,"a",3),i.sc(7,"Server Libraries"),i.Qb(),i.Qb(),i.Rb(8,"li",2),i.Rb(9,"a",3),i.sc(10,"Client Libraries"),i.Qb(),i.Qb(),i.Rb(11,"li",2),i.Rb(12,"a",3),i.sc(13,"NPM & NG Commands"),i.Qb(),i.Qb(),i.Rb(14,"li",2),i.Rb(15,"a",3),i.sc(16,"VS Code Commands"),i.Qb(),i.Qb(),i.Rb(17,"li",2),i.Rb(18,"a",3),i.sc(19,"Git Branching"),i.Qb(),i.Qb(),i.Rb(20,"li",2),i.Rb(21,"a",3),i.sc(22,"VSTS Deployment"),i.Qb(),i.Qb(),i.Qb(),i.Qb()),2&e&&(i.Bb(3),i.Eb("active",t.currentPage("/help")||t.currentPage("/help/topic-gettingStarted")),i.gc("routerLink",i.hc(21,r)),i.Bb(3),i.Eb("active",t.currentPage("/help/topic-serverLibraries")),i.gc("routerLink",i.hc(22,b)),i.Bb(3),i.Eb("active",t.currentPage("/help/topic-clientLibraries")),i.gc("routerLink",i.hc(23,c)),i.Bb(3),i.Eb("active",t.currentPage("/help/topic-npmCommands")),i.gc("routerLink",i.hc(24,l)),i.Bb(3),i.Eb("active",t.currentPage("/help/topic-vsCodeCommands")),i.gc("routerLink",i.hc(25,d)),i.Bb(3),i.Eb("active",t.currentPage("/help/topic-gitBranching")),i.gc("routerLink",i.hc(26,p)),i.Bb(3),i.Eb("active",t.currentPage("/help/topic-vstsDeploy")),i.gc("routerLink",i.hc(27,u)))},directives:[s.e],styles:[".nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{transition:all .5s}.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{font-weight:700;letter-spacing:.075em;margin-left:-20px}"]}),a);function m(e,t){if(1&e){var n=i.Sb();i.Rb(0,"div"),i.Rb(1,"i",2),i.Zb("click",(function(){return i.mc(n),i.cc().toggleNav()})),i.Qb(),i.Nb(2,"br"),i.Nb(3,"app-help-nav"),i.Qb()}}function g(e,t){if(1&e){var n=i.Sb();i.Rb(0,"div"),i.Rb(1,"i",3),i.Zb("click",(function(){return i.mc(n),i.cc().toggleNav()})),i.Qb(),i.sc(2,"\xa0 "),i.Qb()}}var R,Q,f,v,w,y,k,C,S,N=((S=function(){function e(){_classCallCheck(this,e),this.showNav=!0}return _createClass(e,[{key:"toggleNav",value:function(){this.showNav=!this.showNav}}]),e}()).\u0275fac=function(e){return new(e||S)},S.\u0275cmp=i.Gb({type:S,selectors:[["app-help-home"]],decls:5,vars:2,consts:[[1,"d-flex"],[4,"ngIf"],[1,"fa","fa-chevron-left",3,"click"],[1,"fa","fa-chevron-right",3,"click"]],template:function(e,t){1&e&&(i.Rb(0,"div",0),i.rc(1,m,4,0,"div",1),i.Rb(2,"div"),i.rc(3,g,3,0,"div",1),i.Nb(4,"router-outlet"),i.Qb(),i.Qb()),2&e&&(i.Bb(1),i.gc("ngIf",t.showNav),i.Bb(2),i.gc("ngIf",!t.showNav))},directives:[o.j,s.g,h],styles:[""]}),S),A=((C=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||C)},C.\u0275cmp=i.Gb({type:C,selectors:[["app-topic-client-libraries"]],decls:99,vars:0,consts:[[1,"table-responsive"],[1,"table","table-striped","table-hover"],[1,"bg-dark","text-light"],["href","https://www.npmjs.com/package/adal-angular/"],["href","https://angular.io/"],["href","https://daneden.github.io/animate.css/"],["href","http://getbootstrap.com/"],["href","https://www.npmjs.com/package/core-js/"],["href","https://d3js.org/"],["href","http://bevacqua.github.io/dragula/"],["href","https://fortawesome.github.io/Font-Awesome/"],["href","https://jquery.com/"],["href","http://pdfmake.org/#/"],["href","https://ckeditor.com/ckeditor-4/"],["href","https://github.com/Reactive-Extensions/RxJS"],["href","https://codeseven.github.io/toastr/"],["href","http://underscorejs.org/"]],template:function(e,t){1&e&&(i.Rb(0,"article"),i.Rb(1,"h3"),i.sc(2,"Client Libraries"),i.Qb(),i.sc(3," Below is a list of the main client side JavaScript and CSS libraries used in this template, and links to where you can learn more about them."),i.Nb(4,"br"),i.Nb(5,"br"),i.Rb(6,"div",0),i.Rb(7,"table",1),i.Rb(8,"thead"),i.Rb(9,"tr",2),i.Rb(10,"td"),i.sc(11,"Library"),i.Qb(),i.Rb(12,"td"),i.sc(13,"Description"),i.Qb(),i.Qb(),i.Qb(),i.Rb(14,"tbody"),i.Rb(15,"tr"),i.Rb(16,"td"),i.Rb(17,"a",3),i.sc(18,"ADAL-Angular"),i.Qb(),i.Qb(),i.Rb(19,"td"),i.sc(20,"Active Directory Authentication Library (ADAL) used for OAuth authentication with Azure Active Directory"),i.Qb(),i.Qb(),i.Rb(21,"tr"),i.Rb(22,"td"),i.Rb(23,"a",4),i.sc(24,"Angular"),i.Qb(),i.Qb(),i.Rb(25,"td"),i.sc(26,"MVC Framework"),i.Qb(),i.Qb(),i.Rb(27,"tr"),i.Rb(28,"td"),i.Rb(29,"a",5),i.sc(30,"Animate.css"),i.Qb(),i.Qb(),i.Rb(31,"td"),i.sc(32,"CSS3 animations"),i.Qb(),i.Qb(),i.Rb(33,"tr"),i.Rb(34,"td"),i.Rb(35,"a",6),i.sc(36,"Bootstrap 3"),i.Qb(),i.Qb(),i.Rb(37,"td"),i.sc(38,"CSS framework focused on responsive, mobile first design"),i.Qb(),i.Qb(),i.Rb(39,"tr"),i.Rb(40,"td"),i.Rb(41,"a",7),i.sc(42,"Core-JS"),i.Qb(),i.Qb(),i.Rb(43,"td"),i.sc(44,"Polyfills to support modern javaScript capabilities on older browsers"),i.Qb(),i.Qb(),i.Rb(45,"tr"),i.Rb(46,"td"),i.Rb(47,"a",8),i.sc(48,"D3"),i.Qb(),i.Qb(),i.Rb(49,"td"),i.sc(50,"Scalar Vector Graphics (SVG) library for data-driven visualizations"),i.Qb(),i.Qb(),i.Rb(51,"tr"),i.Rb(52,"td"),i.Rb(53,"a",9),i.sc(54,"Dragula"),i.Qb(),i.Qb(),i.Rb(55,"td"),i.sc(56,"Drag and drop library with good visual feedback and touch support"),i.Qb(),i.Qb(),i.Rb(57,"tr"),i.Rb(58,"td"),i.Rb(59,"a",10),i.sc(60,"Font-Awesome"),i.Qb(),i.Qb(),i.Rb(61,"td"),i.sc(62,"Iconic font and CSS toolkit"),i.Qb(),i.Qb(),i.Rb(63,"tr"),i.Rb(64,"td"),i.Rb(65,"a",11),i.sc(66,"JQuery"),i.Qb(),i.Qb(),i.Rb(67,"td"),i.sc(68,"DOM traversal and manipulation, used only to support JQuery-Confirm, Toastr, and Bootstrap, since Angular primarily manages the DOM in this template"),i.Qb(),i.Qb(),i.Rb(69,"tr"),i.Rb(70,"td"),i.Rb(71,"a",12),i.sc(72,"PdfMake"),i.Qb(),i.Qb(),i.Rb(73,"td"),i.sc(74,"Client and server side PDF printing in pure JavaScript"),i.Qb(),i.Qb(),i.Rb(75,"tr"),i.Rb(76,"td"),i.Rb(77,"a",13),i.sc(78,"NG2-CKEditor"),i.Qb(),i.Qb(),i.Rb(79,"td"),i.sc(80,"WYSIWYG HTML Editor"),i.Qb(),i.Qb(),i.Rb(81,"tr"),i.Rb(82,"td"),i.Rb(83,"a",14),i.sc(84,"RxJs"),i.Qb(),i.Qb(),i.Rb(85,"td"),i.sc(86,"Used by Angular for implementing the asynchronous observable pattern instead of promises"),i.Qb(),i.Qb(),i.Rb(87,"tr"),i.Rb(88,"td"),i.Rb(89,"a",15),i.sc(90,"Toastr"),i.Qb(),i.Qb(),i.Rb(91,"td"),i.sc(92,"Non-blocking notifications"),i.Qb(),i.Qb(),i.Rb(93,"tr"),i.Rb(94,"td"),i.Rb(95,"a",16),i.sc(96,"Underscore"),i.Qb(),i.Qb(),i.Rb(97,"td"),i.sc(98,"Hundreds of useful functional programming helpers"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb())},styles:[""]}),C),T=((k=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||k)},k.\u0275cmp=i.Gb({type:k,selectors:[["app-topic-getting-started"]],decls:51,vars:0,consts:[["href","https://nodejs.org/en/"],["src","./assets/asp-net-angular2-300x176.jpg",1,"img-responsive","inline-block","animated","slideInRight","mw-100",2,"float","right"]],template:function(e,t){1&e&&(i.Rb(0,"article"),i.Rb(1,"h3"),i.sc(2,"Getting Started"),i.Qb(),i.sc(3," This template was designed using Angular CLI and Ahead of Time (AoT) compilation. The application is designed to HTML5 and CSS3 standards and should run on any major modern browser on any device and operating system. This application runs completely client side allowing it to be hosted from any web hosting service such as Internet Information Service (IIS), NodeJS, Apache, etc."),i.Nb(4,"br"),i.sc(5," Development was done using Visual Studio Code, but could have just as easily used any IDE or editor such as Atom, Sublime, or even something as simple as NotePad++. The only requirement for development is a system supporting Node package Manager (NPM) packages. If you do not already have NodeJS installed, you can download and install it from here\u2026"),i.Nb(6,"br"),i.Nb(7,"br"),i.sc(8," \xa0\xa0\xa0\xa0\xa0"),i.Rb(9,"a",0),i.sc(10,"https://nodejs.org"),i.Qb(),i.Nb(11,"br"),i.Nb(12,"br"),i.Nb(13,"img",1),i.sc(14," After installing NodeJS open a command prompt at the project root folder (src\\AngularTemplate) and run \u201cnpm install\u201d. This command will read the \u201cpackage.json\u201d file and download and install all the referenced packages."),i.Nb(15,"br"),i.Nb(16,"br"),i.sc(17," If you plan to build additional Angular projects, or modify and test this project, you may want to add the following packages globally:"),i.Nb(18,"br"),i.Nb(19,"br"),i.sc(20," \xa0\xa0\xa0\xa0\xa0npm install -g @angular/cli, jasmine, jshint, karma, npm, protractor, rxjs-tslint, tslint, webpack"),i.Nb(21,"br"),i.Nb(22,"br"),i.sc(23," A nice command to see what global packages are already installed is as follows:"),i.Nb(24,"br"),i.Nb(25,"br"),i.sc(26," \xa0\xa0\xa0\xa0\xa0npm ls -g --depth=0"),i.Nb(27,"br"),i.Nb(28,"br"),i.sc(29," You can also check if any packages are out of date with the following command:"),i.Nb(30,"br"),i.Nb(31,"br"),i.sc(32," \xa0\xa0\xa0\xa0\xa0npm outdated -g --depth=0"),i.Nb(33,"br"),i.Nb(34,"br"),i.sc(35," At this point, you can run the application with the command \u201cng serve\u201d, build the application for development using the command \u201cng build\u201d, or build an optimized version for production using the command \u201cng build --prod -c production\u201d. You can see the production optimizations, paths to environment specific variables, and the additional QA and Staging environment details all in the angular.json file."),i.Nb(36,"br"),i.Nb(37,"br"),i.sc(38," For demonstration purposes without requiring a separate API, the application will by default run using a service for supplying mock user and address data. The template also comes with another service that gets its data from a backend API instead of mocking the data. If you are also implementing the GitHub solution named \u201cApiTemplate\u201d, you can follow these steps to switch from mock data to API accessed data:"),i.Nb(39,"br"),i.Rb(40,"ol"),i.Rb(41,"li"),i.sc(42,"From the folder \u201capp/services\u201d, rename \u201cuser.service.ts\u201d to \u201cmock-user.service.ts\u201d"),i.Qb(),i.Rb(43,"li"),i.sc(44,"From the folder \u201capp/services\u201d, rename \u201capi-user.service.ts\u201d to \u201cuser.service.ts\u201d"),i.Qb(),i.Rb(45,"li"),i.sc(46,"Edit \u201capp/data/config.data.ts\u201d variable \u201capiUrl\u201d to the location you are hosting the API template"),i.Qb(),i.Rb(47,"li"),i.sc(48,"Rebuild the application (gulp rebuild)"),i.Qb(),i.Qb(),i.sc(49," This application also supports OAuth 2.0 implicit flow token for communication with the API. Authentication is supported but not required for template usage. Enabling authentication support, requires editing the \u201cauthProvider\u201d variable in the environment variable files mentioned above, to your OAuth service provider information."),i.Nb(50,"br"),i.Qb())},styles:[""]}),k),j=((y=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||y)},y.\u0275cmp=i.Gb({type:y,selectors:[["app-topic-git-branching"]],decls:14,vars:0,consts:[["href","http://nvie.com/posts/a-successful-git-branching-model/"],["href","http://scottchacon.com/2011/08/31/github-flow.html"]],template:function(e,t){1&e&&(i.Rb(0,"article"),i.Rb(1,"h3"),i.sc(2,"Git Version Control Branching Recomendations"),i.Qb(),i.sc(3," It is recommended that this application follow a hybrid approach between "),i.Rb(4,"a",0),i.sc(5,"git-flow"),i.Qb(),i.sc(6," and "),i.Rb(7,"a",1),i.sc(8,"github-hub"),i.Qb(),i.sc(9,", mainly sticking to the git-flow model only because of an existing strategy around continuous integration with multiple the multiple environments (dev, qa, staing, and production). Like git-flow, there will be a branch maintained for each permanent hosting environment (usually dev, qa. staging, and production). If you have read git-flow, the \u201cqa\u201d and \u201cstaging\u201d branches can be thought of as that document\u2019s \u201crelease\u201d branches. The production branch will always be called \u201cmaster\u201d and it should always be in a production ready state. Anytime an environment branch is updated, continuous integration should immediately update its respective hosting environment."),i.Nb(10,"br"),i.Nb(11,"br"),i.sc(12," New feature branches should be created from the \u201cdev\u201d branch and merged back into the \u201cdev\u201d branch when ready for integration testing. When QA is ready to test a new release, the \u201cdev\u201d branch can be merged into the \u201cqa\u201d branch. Any bugs found in QA would be fixed in its own branch cloned from \u201cqa\u201d, and when complete pushed back to both the \u201cqa\u201d and \u201cdev\u201d branches. Likewise, any bugs fixed in the \u201cmaster\u201d branch would have to also be merged into the other environment branches."),i.Nb(13,"br"),i.Qb())},encapsulation:2}),y),P=((w=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||w)},w.\u0275cmp=i.Gb({type:w,selectors:[["app-topic-npm-commands"]],decls:63,vars:0,consts:[[1,"table-responsive"],[1,"table","table-striped","table-hover"],[1,"bg-dark","text-light"]],template:function(e,t){1&e&&(i.Rb(0,"article"),i.Rb(1,"h3"),i.sc(2,"NPM and NG Commands"),i.Qb(),i.sc(3," Angular CLI has several useful commands for creating and building applications. These commands can be run from the console by preceding them with the name \u201cng\u201d (example: ng new [myNewApp])"),i.Nb(4,"br"),i.Nb(5,"br"),i.Rb(6,"div",0),i.Rb(7,"table",1),i.Rb(8,"thead"),i.Rb(9,"tr",2),i.Rb(10,"td"),i.sc(11,"Command"),i.Qb(),i.Rb(12,"td"),i.sc(13,"Description"),i.Qb(),i.Qb(),i.Qb(),i.Rb(14,"tbody"),i.Rb(15,"tr"),i.Rb(16,"td"),i.sc(17,"new"),i.Qb(),i.Rb(18,"td"),i.sc(19,"Creates a new project from a template that follow Angular best practices and styles."),i.Qb(),i.Qb(),i.Rb(20,"tr"),i.Rb(21,"td"),i.sc(22,"serve"),i.Qb(),i.Rb(23,"td"),i.sc(24,"Builds the application outputing it to memory only, then launching and watching the application for code changes, automatically re-compiling and refreshing the browser as needed."),i.Qb(),i.Qb(),i.Rb(25,"tr"),i.Rb(26,"td"),i.sc(27,"build"),i.Qb(),i.Rb(28,"td"),i.sc(29,"Builds the application following the options listed in angular.json or passed on the command line, based on the environment configuration passed in. A default new project has a development environment (default), and a production environment. Other envirnments like QA and staging, can be added to angular.json as needed."),i.Qb(),i.Qb(),i.Rb(30,"tr"),i.Rb(31,"td"),i.sc(32,"test"),i.Qb(),i.Rb(33,"td"),i.sc(34,"Builds the test configuration as defined in angular.json, and discovers and launches all 'spec' files reporting on the results of each test."),i.Qb(),i.Qb(),i.Rb(35,"tr"),i.Rb(36,"td"),i.sc(37,"lint"),i.Qb(),i.Rb(38,"td"),i.sc(39,"Analyses the source code and compared against rules defined in tslint.json reporting on any found issues."),i.Qb(),i.Qb(),i.Rb(40,"tr"),i.Rb(41,"td"),i.sc(42,"e2e"),i.Qb(),i.Rb(43,"td"),i.sc(44,"Runs all the end to end tests located in the e2e folder reporting on any found issues."),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Nb(45,"br"),i.sc(46," Node Package Manager (NPM) can also execute scripts defined in the package.json file but it is best to use the Angular commands whenever possible. These commands can be run from the console by preceding them with the name \u201cnpm\u201d (example: npm install)"),i.Nb(47,"br"),i.Nb(48,"br"),i.Rb(49,"div",0),i.Rb(50,"table",1),i.Rb(51,"thead"),i.Rb(52,"tr",2),i.Rb(53,"td"),i.sc(54,"Command"),i.Qb(),i.Rb(55,"td"),i.sc(56,"Description"),i.Qb(),i.Qb(),i.Qb(),i.Rb(57,"tbody"),i.Rb(58,"tr"),i.Rb(59,"td"),i.sc(60,"install"),i.Qb(),i.Rb(61,"td"),i.sc(62,"Reads the \u201cpackage.json\u201d file, identifies all node packages required by the project, then pulls them down from the Internet and places them (including all dependencies) into the \u201cnode_modules\u201d folder. Packages are not added to version control, so this command should be run whenever the packages within \u201cpackage.json\u201d changes. This command is idempotent so it is safe to run at any time and will not re-download packages that already exist and have not changed."),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb())},encapsulation:2}),w),L=((v=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||v)},v.\u0275cmp=i.Gb({type:v,selectors:[["app-topic-server-libraries"]],decls:71,vars:0,consts:[["id","serverLibraries"],[1,"table-responsive"],[1,"table","table-striped","table-hover"],[1,"bg-dark","text-light"],["href","https://cli.angular.io/"],["href","https://palantir.github.io/tslint/"],["href","http://gulpjs.com/"],["href","http://jasmine.github.io/2.4/introduction.html"],["href","https://karma-runner.github.io/0.13/index.html"],["href","https://nodejs.org/en/"],["href","https://www.protractortest.org/#/"],["href","https://www.typescriptlang.org/"],["href","https://webpack.js.org/"]],template:function(e,t){1&e&&(i.Rb(0,"article"),i.Rb(1,"h3",0),i.sc(2,"Server Libraries"),i.Qb(),i.sc(3," Below is a list of the main server side libraries used in this template, and links to where you can learn more about them."),i.Nb(4,"br"),i.Nb(5,"br"),i.Rb(6,"div",1),i.Rb(7,"table",2),i.Rb(8,"thead"),i.Rb(9,"tr",3),i.Rb(10,"td"),i.sc(11,"Library"),i.Qb(),i.Rb(12,"td"),i.sc(13,"Description"),i.Qb(),i.Qb(),i.Qb(),i.Rb(14,"tbody"),i.Rb(15,"tr"),i.Rb(16,"td"),i.Rb(17,"a",4),i.sc(18,"Angular CLI"),i.Qb(),i.Qb(),i.Rb(19,"td"),i.sc(20,"Command line interface for Angular"),i.Qb(),i.Qb(),i.Rb(21,"tr"),i.Rb(22,"td"),i.Rb(23,"a",5),i.sc(24,"TSLint"),i.Qb(),i.Qb(),i.Rb(25,"td"),i.sc(26,"Static analysis tool (linter) that checks TypeScript code for readability, maintainability, and functionality errors."),i.Qb(),i.Qb(),i.Rb(27,"tr"),i.Rb(28,"td"),i.Rb(29,"a",6),i.sc(30,"Gulp"),i.Qb(),i.Qb(),i.Rb(31,"td"),i.sc(32,"Task runner focused on stream based workflows. Smaller libraries are used with Gulp such as del, merge2, minify-css, sourcemaps, typescript, uglify, and util. These libraries all work together to build powerful workflows and automations. This should be installed globally (npm install -g)."),i.Qb(),i.Qb(),i.Rb(33,"tr"),i.Rb(34,"td"),i.Rb(35,"a",7),i.sc(36,"Jasmine"),i.Qb(),i.Qb(),i.Rb(37,"td"),i.sc(38,"JavaScript unit testing"),i.Qb(),i.Qb(),i.Rb(39,"tr"),i.Rb(40,"td"),i.Rb(41,"a",8),i.sc(42,"Karma"),i.Qb(),i.Qb(),i.Rb(43,"td"),i.sc(44,"Test runner used to tie any unit test tool (Jasmine in this template) to different browsers, and automate testing with any task runner (Gulp in this template)"),i.Qb(),i.Qb(),i.Rb(45,"tr"),i.Rb(46,"td"),i.Rb(47,"a",9),i.sc(48,"NodeJS"),i.Qb(),i.Qb(),i.Rb(49,"td"),i.sc(50,'Lightweight and efficient, cross platform, event-driven, non-blocking server engine, and includes a package manager (NPM). Node must be installed, and packaged updated with "npm install" before using this template. All above listed server libraries use Node for their engine making them all cross platform.'),i.Qb(),i.Qb(),i.Rb(51,"tr"),i.Rb(52,"td"),i.Rb(53,"a",10),i.sc(54,"Protractor"),i.Qb(),i.Qb(),i.Rb(55,"td"),i.sc(56,"End to end testing for Angular"),i.Qb(),i.Qb(),i.Rb(57,"tr"),i.Rb(58,"td"),i.Rb(59,"a",11),i.sc(60,"TypeScript"),i.Qb(),i.Qb(),i.Rb(61,"td"),i.sc(62,"Types superset of JavaScript that compiles to JavaScript. This should be installed globally (npm install -g)."),i.Qb(),i.Qb(),i.Rb(63,"tr"),i.Rb(64,"td"),i.Rb(65,"a",12),i.sc(66,"WebPack"),i.Qb(),i.Qb(),i.Rb(67,"td"),i.sc(68,"Script compiling, minification, uglification, and bundling"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.sc(69," *Note: Gulp has been removed from this project as it was no longer needed after Webpack and Angular CLI. Gulp is however a valuable tool for task scripting so has been left on this list"),i.Nb(70,"br"),i.Qb())},encapsulation:2}),v),I=((f=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||f)},f.\u0275cmp=i.Gb({type:f,selectors:[["app-topic-vs-code-commands"]],decls:96,vars:0,consts:[[1,"table-responsive"],[1,"table","table-striped","table-hover"],[1,"bg-dark","text-light"]],template:function(e,t){1&e&&(i.Rb(0,"article"),i.Rb(1,"h3"),i.sc(2,"Visual Studio Code Commands"),i.Qb(),i.sc(3," Visual Studio Code supports hundreds of keyboard shortcuts that are all customizable from the menu item \u201cFile > Preferences > Keyboard Shortcuts\u201d. A few of the frequently used keyboard shortcuts are listed here for those less familiar with Visual Studio Code. "),i.Nb(4,"br"),i.Nb(5,"br"),i.Rb(6,"div",0),i.Rb(7,"table",1),i.Rb(8,"thead"),i.Rb(9,"tr",2),i.Rb(10,"td"),i.sc(11,"Command"),i.Qb(),i.Rb(12,"td"),i.sc(13,"Description"),i.Qb(),i.Qb(),i.Qb(),i.Rb(14,"tbody"),i.Rb(15,"tr"),i.Rb(16,"td"),i.sc(17,"F1"),i.Qb(),i.Rb(18,"td"),i.sc(19,"Show all commands"),i.Qb(),i.Qb(),i.Rb(20,"tr"),i.Rb(21,"td"),i.sc(22,"Alt+Click"),i.Qb(),i.Rb(23,"td"),i.sc(24,"Create multiple cursors where any keystrokes are applied to all active cursors"),i.Qb(),i.Qb(),i.Rb(25,"tr"),i.Rb(26,"td"),i.sc(27,"Ctrl+2"),i.Qb(),i.Rb(28,"td"),i.sc(29,"Opens a vertical split and second window. Can also do Control+3, etc. for more windows."),i.Qb(),i.Qb(),i.Rb(30,"tr"),i.Rb(31,"td"),i.sc(32,"Ctrl+B"),i.Qb(),i.Rb(33,"td"),i.sc(34,"Toggles opening and closing the sidebar"),i.Qb(),i.Qb(),i.Rb(35,"tr"),i.Rb(36,"td"),i.sc(37,"Ctrl+K then Ctrl+C"),i.Qb(),i.Rb(38,"td"),i.sc(39,"Comments out selected rows"),i.Qb(),i.Qb(),i.Rb(40,"tr"),i.Rb(41,"td"),i.sc(42,"Ctrl+K then Ctrl+U"),i.Qb(),i.Rb(43,"td"),i.sc(44,"Uncomments selected rows"),i.Qb(),i.Qb(),i.Rb(45,"tr"),i.Rb(46,"td"),i.sc(47,"Ctrl+P"),i.Qb(),i.Rb(48,"td"),i.sc(49,'Show custom commands such as gulp tasks when followed by "task " to get a dropdown list of tasks'),i.Qb(),i.Qb(),i.Rb(50,"tr"),i.Rb(51,"td"),i.sc(52,"Ctrl+S"),i.Qb(),i.Rb(53,"td"),i.sc(54,"Save current file"),i.Qb(),i.Qb(),i.Rb(55,"tr"),i.Rb(56,"td"),i.sc(57,"Ctrl+Alt+F"),i.Qb(),i.Rb(58,"td"),i.sc(59,"Format code"),i.Qb(),i.Qb(),i.Rb(60,"tr"),i.Rb(61,"td"),i.sc(62,"Ctrl+Shift+C"),i.Qb(),i.Rb(63,"td"),i.sc(64,"Opens a comand prompt external to VS code"),i.Qb(),i.Qb(),i.Rb(65,"tr"),i.Rb(66,"td"),i.sc(67,"Ctrl+~"),i.Qb(),i.Rb(68,"td"),i.sc(69,"Opens a comand prompt internal to VS code"),i.Qb(),i.Qb(),i.Rb(70,"tr"),i.Rb(71,"td"),i.sc(72,"Ctrl+Space"),i.Qb(),i.Rb(73,"td"),i.sc(74,"Trigger suggestion (intellisense)"),i.Qb(),i.Qb(),i.Rb(75,"tr"),i.Rb(76,"td"),i.sc(77,"Ctrl+Tab"),i.Qb(),i.Rb(78,"td"),i.sc(79,"Switch between recently accessed files"),i.Qb(),i.Qb(),i.Rb(80,"tr"),i.Rb(81,"td"),i.sc(82,"Ctrl+]"),i.Qb(),i.Rb(83,"td"),i.sc(84,"Indent selected rows"),i.Qb(),i.Qb(),i.Rb(85,"tr"),i.Rb(86,"td"),i.sc(87,"Ctrl+["),i.Qb(),i.Rb(88,"td"),i.sc(89,"Outdent selected rows"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Nb(90,"br"),i.sc(91," Visual Studio Code also supports customizing settings at either the workspace or user level. This project has some custom settings designed at improving the development experience. Feel free to override these workspace settings with your own custom user settings, but do not update the workspace settings directly as they are the recommended defaults are managed along with the rest of the application through version control."),i.Nb(92,"br"),i.Nb(93,"br"),i.sc(94," The basic customizations made are to hide JavaScript files where there is a Typescript file of the same name, and to hide map files. These changes simplify the Explorer view cleaner making it quicker to find the important editable files. Some minor additional customizations were also added to automatically format code while typing and to remove trailing whitespace and enforce the requirement for semicolons on each line."),i.Nb(95,"br"),i.Qb())},encapsulation:2}),f),D=((Q=function e(){_classCallCheck(this,e)}).\u0275fac=function(e){return new(e||Q)},Q.\u0275cmp=i.Gb({type:Q,selectors:[["app-topic-vsts-deploy"]],decls:119,vars:0,template:function(e,t){1&e&&(i.Rb(0,"article"),i.Rb(1,"h3"),i.sc(2,"Deploying a native Angular CLI application to Azure using VSTS"),i.Qb(),i.sc(3," The GIT ignore file (.gitignore) will ensure only source code is saved to the repository, by excluding things like the \u2018dist\u2019 and \u2018node_modules\u2019 folders. This means that what is placed into source control is not what should be deployed to the web server. Visual Studio Team Services (VSTS) and other deployment tools are used to go through the same \u2018ng build\u2019 process, and deploy the final output to the web server. Below are the steps to achieve a successful build using VSTS to Azure App Service, and these steps should be easily modifiable to other deployment tools and hosting environments."),i.Nb(4,"br"),i.Nb(5,"br"),i.Rb(6,"ol"),i.Rb(7,"li"),i.sc(8," Create new project using Angular CLI to ensure the structure follows Angular best practices and styles "),i.Rb(9,"ul"),i.Rb(10,"li"),i.Rb(11,"code"),i.sc(12,"ng new [angularProjectName] --style=scss"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(13,"li"),i.Rb(14,"code"),i.sc(15,"cd [angularProjectName]"),i.Qb(),i.Qb(),i.Rb(16,"li"),i.Rb(17,"code"),i.sc(18,"code ."),i.Qb(),i.Qb(),i.Rb(19,"li"),i.sc(20,"Change 'outputPath' in angular.json to \"dist\" removing project subfolder"),i.Qb(),i.Rb(21,"li"),i.sc(22," Check-in code changes "),i.Rb(23,"ol"),i.Rb(24,"li"),i.sc(25,"Login to VSTS - example: https://[vstsTenantName].visualstudio.com"),i.Qb(),i.Rb(26,"li"),i.sc(27," Optional - Create new VSTS project "),i.Rb(28,"ul"),i.Rb(29,"li"),i.sc(30,"version control = GIT"),i.Qb(),i.Qb(),i.Qb(),i.Rb(31,"li"),i.sc(32," Optional - Create new VSTS repo in existing project "),i.Rb(33,"ul"),i.Rb(34,"li"),i.sc(35,' select "code" tab then dropdown of repos at upper left and choose "+ new repository" '),i.Rb(36,"ul"),i.Rb(37,"li"),i.sc(38,"Type = GIT"),i.Qb(),i.Rb(39,"li"),i.sc(40,"Repository Name = [angularProjectName]"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(41,"li"),i.sc(42," Bind local GIT repo to VSTS repo from CMD prompt from root folder of angular project (local repo root) "),i.Rb(43,"ol"),i.Rb(44,"li"),i.Rb(45,"code"),i.sc(46,"git remote add origin https://[vststenantname].visualstudio.com/[vstsProjectName]/_git/[repoName]"),i.Qb(),i.Qb(),i.Rb(47,"li"),i.Rb(48,"code"),i.sc(49,"git push -u origin --all"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(50,"li"),i.sc(51," Setup Azure App Service "),i.Rb(52,"ol"),i.Rb(53,"li"),i.sc(54,"Example: https://[angularProjectName].azurewebsites.net"),i.Qb(),i.Rb(55,"li"),i.sc(56,'Change platform to "64-bit"'),i.Qb(),i.Rb(57,"li"),i.sc(58,'Change HTTP Version to "2.0"'),i.Qb(),i.Rb(59,"li"),i.sc(60,'Change Affinity to "Off"'),i.Qb(),i.Qb(),i.Qb(),i.Rb(61,"li"),i.sc(62," Setup build process in VSTS "),i.Rb(63,"ol"),i.Rb(64,"li"),i.sc(65,'Select "Build and Release" tab and click "+ New Definition"'),i.Qb(),i.Rb(66,"li"),i.sc(67,"Select project, repository, and branch"),i.Qb(),i.Rb(68,"li"),i.sc(69,'Select "Empty Process"'),i.Qb(),i.Rb(70,"li"),i.sc(71," Add step: Node Tool Installer "),i.Rb(72,"ul"),i.Rb(73,"li"),i.sc(74,"Set to version spec 8.9 (required for Angular Cli 6)"),i.Qb(),i.Qb(),i.Qb(),i.Rb(75,"li"),i.sc(76," Add step: NPM "),i.Rb(77,"ul"),i.Rb(78,"li"),i.sc(79,"Command = install"),i.Qb(),i.Qb(),i.Qb(),i.Rb(80,"li"),i.sc(81," Add step: NPM "),i.Rb(82,"ul"),i.Rb(83,"li"),i.sc(84,"Display Name = build"),i.Qb(),i.Rb(85,"li"),i.sc(86,"Command = custom"),i.Qb(),i.Rb(87,"li"),i.sc(88," Command and arguments "),i.Rb(89,"ul"),i.Rb(90,"li"),i.sc(91,"Development = run ng -- build"),i.Qb(),i.Rb(92,"li"),i.sc(93,"QA (if setup in project) = run ng -- build -c qa"),i.Qb(),i.Rb(94,"li"),i.sc(95,"Staging (if setup in project) = run ng -- build -c staging"),i.Qb(),i.Rb(96,"li"),i.sc(97,"Production = run ng -- build --prod -c production"),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(98,"li"),i.sc(99,' Add step: "Azure App Service Deploy" '),i.Rb(100,"ul"),i.Rb(101,"li"),i.sc(102," Package or folder = $(System.DefaultWorkingDirectory)/dist "),i.Rb(103,"ul"),i.Rb(104,"li"),i.sc(105," If project subfolder was not previously removed from angular.json dist folder in (above step), then it must be added here "),i.Rb(106,"ul"),i.Rb(107,"li"),i.sc(108,"example: $(System.DefaultWorkingDirectory)/dist/[angularProjectName]"),i.Qb(),i.Qb(),i.Qb(),i.Rb(109,"li"),i.sc(110,'Check "Additional Deployment Options/Publish using Web Deploy"'),i.Qb(),i.Rb(111,"li"),i.sc(112,'Check "Additional Deployment Options/Remove additional files at destination"'),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(113,"li"),i.sc(114,"Save & queue"),i.Qb(),i.Rb(115,"li"),i.sc(116,"Confirm successful deployment and smoke test application URL"),i.Qb(),i.Qb(),i.Qb(),i.Rb(117,"li"),i.sc(118,"Setup dev, qa, and staging GIT branches and associated builds"),i.Qb(),i.Qb(),i.Qb())},styles:["ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%]{word-break:break-all;word-wrap:break-word}"]}),Q),_=((R=function e(){_classCallCheck(this,e)}).\u0275mod=i.Kb({type:R}),R.\u0275inj=i.Jb({factory:function(e){return new(e||R)},providers:[{provide:o.g,useClass:o.d}],imports:[[o.b,s.f.forChild([{path:"",component:N,children:[{path:"",component:T},{path:"topic-clientLibraries",component:A},{path:"topic-gettingStarted",component:T},{path:"topic-gitBranching",component:j},{path:"topic-npmCommands",component:P},{path:"topic-serverLibraries",component:L},{path:"topic-vsCodeCommands",component:I},{path:"topic-vstsDeploy",component:D}]}])]]}),R)}}]);