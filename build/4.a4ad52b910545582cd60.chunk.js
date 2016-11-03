webpackJsonp([4],{137:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var a,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(3),i=r(24),s=r(22),d=r(138),l=r(141),c=r(144),h=r(147),p=function(){function HelpModule(){}return HelpModule=n([o.NgModule({declarations:[d.HelpComponent,l.HelpHomeComponent,c.HelpNavComponent],imports:[s.CommonModule,i.RouterModule,h.routing],providers:[{provide:s.LocationStrategy,useClass:s.HashLocationStrategy}]}),a("design:paramtypes",[])],HelpModule)}();t.HelpModule=p},138:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var a,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(3),i=function(){function HelpComponent(){this.showNav=!0}return HelpComponent.prototype.toggleNav=function(){this.showNav=!this.showNav},HelpComponent.prototype.ngOnInit=function(){window.appInsights.trackPageView("help-module/help.component")},HelpComponent=n([o.Component({moduleId:e.id.toString(),selector:"my-help",styles:[r(139)],template:r(140)}),a("design:paramtypes",[])],HelpComponent)}();t.HelpComponent=i},139:function(e,t){e.exports="i {\r\n    margin-left: -20px;\r\n}\r\n"},140:function(e,t){e.exports="<i class=\"affix fa hidden-xs hidden-sm\" (click)='toggleNav()' [class.fa-chevron-left]='showNav' [class.fa-chevron-right]='!showNav'></i><br/>\r\n<div class='row'>\r\n    <!--Hide sidebar nav when screen size gets small-->\r\n    <div *ngIf='showNav' class='col-md-2 hidden-xs hidden-sm'>\r\n        <help-nav></help-nav>\r\n    </div>\r\n    <div class='col-xs-12' [class.col-md-10]='showNav'>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>\r\n"},141:function(e,t,r){(function(n){"use strict";var a=this&&this.__decorate||function(e,t,r,n){var a,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=r(3),s=r(24),d=function(){function HelpHomeComponent(e,t){this._route=e,this._router=t}return HelpHomeComponent.prototype.ngOnInit=function(){this.sub=this._router.routerState.root.queryParams.subscribe(function(e){var t=e.id;if(t){n("#"+t)[0].scrollIntoView();var r=-60;"gettingStarted"===t&&(r=-80),window.scrollBy(0,r)}})},HelpHomeComponent.prototype.ngOnDestroy=function(){this.sub.unsubscribe(),window.scrollBy(0,-60)},HelpHomeComponent=a([i.Component({moduleId:e.id.toString(),selector:"help-home",template:r(142)}),o("design:paramtypes",["function"==typeof(t="undefined"!=typeof s.ActivatedRoute&&s.ActivatedRoute)&&t||Object,"function"==typeof(d="undefined"!=typeof s.Router&&s.Router)&&d||Object])],HelpHomeComponent);var t,d}();t.HelpHomeComponent=d}).call(t,r(69))},142:function(e,t,r){e.exports='<article>\r\n    <h3 id="gettingStarted">Getting Started</h3>\r\n    This template is designed to work primarily on Visual Studio 2015 and Visual Studio Code, but has been developed using all cross platform libraries and can be hosted with either Node or .Net core.  This means code editors such as Atom, Sublime, or even something as simple as NotePad++ could be used.  Even if this template will be hosted using .Net core or another non Node server, NodeJS will still need to be installed to support package management (npm), task workflows (gulp), and their supporting tools.  You can download and install NodeJS from here…<br/>\r\n    <br/>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://nodejs.org/en/">https://nodejs.org</a><br/>\r\n    <br/>\r\n    <img class="img-responsive inline-block animated slideInRight" style="float:right" src="'+r(143)+'">\r\n    After installing node, open a command prompt at the project root folder (src\\Angular2Template) and run “npm install”.  This command will read the “package.json” file and download and install all the referenced packages. At this point, the application will run using a mock service for supplying user and address data.  The template also comes with a service that gets its data from a backend API instead of mocking the data.  If you are also implementing the GitHub solution named <a href="https://github.com/PaulGilchrist/ApiTemplate">“ApiTemplate”</a>, you can follow these steps to switch from mock data to API accessed data:<br/>\r\n    <br/>\r\n    <ol>\r\n        <li>From the folder “app/services”, rename “user.service.ts” to “mock-user.service.ts”</li>\r\n        <li>From the folder “app/services”, rename “api-user.service.ts” to “user.service.ts”</li>\r\n        <li>Edit “app/data/config.data.ts” variable “apiUrl” to the location you are hosting the API template</li>\r\n        <li>Rebuild the application (gulp rebuild)</li>\r\n    </ol>\r\n    This application also supports OAuth 2.0 implicit flow token for communication with the API.  Authentication is supported but not required for template usage.  Enabling authentication support, requires editing the “authProvider” variable in the same config file as above to your OAuth service provider information.<br/>\r\n    <br/>\r\n    <h3 id="clientLibraries">Client Libraries</h3>\r\n        Below is a list of the main client side JavaScript and CSS libraries used in this template, and links to where you can learn more about them.<br/>\r\n    <br/>\r\n    <div class="table-responsive">\r\n        <table class="table table-striped table-hover">\r\n            <thead><tr class="success"><td>Library</td><td>Description</td></tr></thead>\r\n            <tbody>\r\n                <!--Need to add -> animate, d3, and dragula -->\r\n                <tr><td><a href="https://angular.io/">Angular 2</a></td><td>MVC Framework</td></tr>\r\n                <tr><td><a href="https://daneden.github.io/animate.css/">Animate.css</a></td><td>CSS3 animations</td></tr>\r\n                <tr><td><a href="http://getbootstrap.com/">Bootstrap</a></td><td>CSS framework focused on responsive, mobile first design</td></tr>\r\n                <tr><td><a href="https://d3js.org/">D3</a></td><td>Scalar Vector Graphics (SVG) library for data-driven visualizations</td></tr>\r\n                <tr><td><a href="http://bevacqua.github.io/dragula/">Dragula</a></td><td>Drag and drop library with good visual feedback and touch support</td></tr>\r\n                <tr><td><a href="https://fortawesome.github.io/Font-Awesome/">Font-Awesome</a></td><td>Iconic font and CSS toolkit</td></tr>\r\n                <tr><td><a href="https://jquery.com/">JQuery</a></td><td>DOM traversal and manipulation, used only to support JQuery-Confirm, Toastr, and Bootstrap, since Angular primarily manages the DOM in this template</td></tr>\r\n                <tr><td><a href="https://github.com/myclabs/jquery.confirm">JQuery-Confirm</a></td><td>Confirm dialogs for buttons and links</td></tr>\r\n                <tr><td><a href="https://github.com/Reactive-Extensions/RxJS">RxJs</a></td><td>Used by Angular for implementing the asynchronous observable pattern instead of promises</td></tr>\r\n                <tr><td><a href="https://github.com/systemjs/systemjs/blob/master/docs/overview.md">SystemJS</a></td><td>JavaScript module loader</td></tr>\r\n                <tr><td><a href="https://codeseven.github.io/toastr/">Toastr</a></td><td>Non-blocking notifications</td></tr>\r\n                <tr><td><a href="http://underscorejs.org/">Underscore</a></td><td>Hundreds of useful functional programming helpers</td></tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <h3 id="serverLibraries">Server Libraries</h3>\r\n        Below is a list of the main server side libraries used in this template, and links to where you can learn more about them.<br/>\r\n    <br/>\r\n    <div class="table-responsive">\r\n        <table class="table table-striped table-hover">\r\n            <thead><tr class="success"><td>Library</td><td>Description</td></tr></thead>\r\n            <tbody>\r\n                <!--Need to add -> live-server, npm-flatten, concurrently, typescript, and typings -->\r\n                <tr><td><a href="https://www.npmjs.com/package/concurrently">Concurrently</a></td><td>Run multiple commands concurrently.  This should be installed globally (npm install -g).</td></tr>\r\n                <tr><td><a href="http://gulpjs.com/">Gulp</a></td><td>Task runner focused on stream based workflows.  Smaller libraries are used with Gulp such as del, merge2, minify-css, sourcemaps, typescript, uglify, and util.  These libraries all work together to build powerful workflows and automations.  This should be installed globally (npm install -g).</td></tr>\r\n                <tr><td><a href="http://jasmine.github.io/2.4/introduction.html">Jasmine</a></td><td>JavaScript unit testing</td></tr>\r\n                <tr><td><a href="https://karma-runner.github.io/0.13/index.html">Karma</a></td><td>Test runner used to tie any unit test tool (Jasmine in this template) to different browsers, and automate testing with any task runner (Gulp in this template)</td></tr>\r\n                <tr><td><a href="https://github.com/johnpapa/lite-server">Lite-Server</a></td><td>Lightweight development only node server that serves a web app, opens it in the browser, refreshes when html or javascript change, injects CSS changes using sockets, and has a fallback page when a route is not found.  This should be installed globally (npm install -g).</td></tr>\r\n                <tr><td><a href="https://github.com/tapio/live-server">Live-Server</a></td><td>Development server similar to lite-server, with live reload capability to accelerate development.  Used in this application to re-run Jasmine tests whenever code files change.  Using both lite and live server only to align with current Angular2.io recomendations.  Plan to consolidate to one of the other in the future.  This should be installed globally (npm install -g).</td></tr>\r\n                <tr><td><a href="https://nodejs.org/en/">NodeJS</a></td><td>Lightweight and efficient, cross platform, event-driven, non-blocking server engine, and includes a package manager (NPM).  Node must be installed, and packaged updated with "npm install" before using this template.  All above listed server libraries use Node for their engine making them all cross platform.</td></tr>\r\n                <tr><td><a href="https://github.com/neenhouse/npm-flatten">Npm-flatten</a></td><td>Flattens node-modules folder into single level of dependencies fixing the issue with Windows limited path length.  This should be installed globally (npm install -g).</td></tr>\r\n                <tr><td><a href="https://www.typescriptlang.org/">TypeScript</a></td><td>Types superset of JavaScript that compiles to JavaScript.  This should be installed globally (npm install -g).</td></tr>\r\n                <tr><td><a href="https://www.npmjs.com/package/typings">Typings</a></td><td>TypeScript definition manager.  Definitions are used to add intellisense and support syntax checking for development tools such as Visual Studio code.  This should be installed globally (npm install -g).</td></tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <h3 id="gulpCommands">Gulp Commands</h3>\r\n    All of these commands can be run from inside Visual Studio Code by typing “Control+P” then typing task and selecting from the dropdown list.  These commands can also be run from the console by preceding them with the name “gulp” (example: gulp test)<br/>\r\n    <br/>\r\n    <div class="table-responsive">\r\n        <table class="table table-striped table-hover">\r\n            <thead><tr class="success"><td>Command</td><td>Description</td></tr></thead>\r\n            <tbody>\r\n                <tr><td>build</td><td>Compiles TypeScript to minified JavaScript while also creating source maps.  All TypeScript files are left in the wwwroot folder with the deployed JS files as an Angular best practice, keeping all related files together simplifying both development and client side debugging.</td></tr>\r\n                <tr><td>clean</td><td>Removes all files from the “wwwroot” folder that originated from a Node or Bower package including CSS, declaration (d.ts), fonts, JavaScript, and map files.  Also removes all files compiled from application source leaving behind only the original TypeScript, HTML, and CSS files.</td></tr>\r\n                <tr><td>copyFiles</td><td>Copies files from “node_modules” to their required destination folders under “wwwroot”.  The only files copied are those explicitly required by the application.  As third party CSS, font, or JavaScript files are needed by the client browser, these need to be added to the “gulpfile.js” variables cssToMove, fontsToMove, or jsToMove respectively.</td></tr>\r\n                <tr><td>rebuild</td><td>Removes unneeded files from the “wwwroot” folder, refreshes package files, then compiles all TypeScript files into minified JavaScript and their associated map files.  More specifically, this task executes the Gulp “clean” process then when complete executes both the “copyFiles”, and “build” processes in parallel.</td></tr>\r\n                <tr><td>test</td><td>Executes a Gulp “build” process followed by execution of all existing unit tests.  Unit tests should be in the same folder as the component they test, and be named with the same name as the test, but ending in “spec.ts”.  This task will output the number of tests run, how many were successful, how many failed, and the reason for each failure. You can look in the services or pipes folder for examples of spec file naming standards and overall usage best practices.  The files named “user.serivce.spec.ts” shows a good example on how to test components that have direct injection dependencies.</td></tr>\r\n                <tr><td>watch</td><td>Executes the “build” task followed by the “test” task, then watches all TypeScript files for changes automatically re-compiling and re-testing them as needed.</td></tr>\r\n                <tr><td>copyProd</td><td>Removes all files and folders from the “build” folder and then replaces them with an exact copy of “wwwroot”</td></tr>\r\n                <tr><td>buildProd</td><td>Copies only the minimal files needed for a production deployment from the “wwwroot” folder to the “build” folder.  TypeScript, declaration, and map files will not be included, leaving only minified css, JavaScript, and standard HTML.  The plan is to also minify the HTML also in the future.</td></tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <h3 id="npmCommands">NPM Commands</h3>\r\n    Node Package Manager (NPM) can also execute tasks but we should defer to Gulp whenever possible.  These commands can be run from the console by preceding them with the name “npm” (example: npm install)<br/>\r\n    <br/>\r\n    <div class="table-responsive">\r\n        <table class="table table-striped table-hover">\r\n            <thead><tr class="success"><td>Command</td><td>Description</td></tr></thead>\r\n            <tbody>\r\n                <!--Need to add -> test, postinstall -->\r\n                <!--Need to update -> start to discuss how it concurrently runs test -->\r\n                <tr><td>install</td><td>Reads the “package.json” file, identifies all node packages required by the project, then pulls them down from the Internet and places them (including all dependencies) into the “node_modules” folder.  Packages are not added to version control, so this command should be run whenever the packages within “package.json” changes.  This command is idempotent so it is safe to run at any time and will not re-download packages that already exist and have not changed.</td></tr>\r\n                <tr><td>postinstall</td><td>Installs or updates configured TypeScript definition files after all node modules have been installed or updated.</td></tr>\r\n                <tr><td>start</td><td>Executes the Gulp “watch” to ensure all files are compiles and tested, then launches a lightweight Node server names BrowserSync that hosts the application and watches all CSS, JavaScript, and HTML files for changes.  If any TypeScript files change, the Gulp task will recompile and retest them.  The recompile to JavaScript is noticed by BrowserSync, and all connected browsers are automatically refreshed.  This command also launches the "test" command for Jasmine unit-test monitoring in a separate browser tab.  Connected browsers are refreshed when code changes are saved.  This is one of the most commonly used commands allowing for rapid development and testing.</td></tr>\r\n                <tr><td>test</td><td>Launches Jamine unit testing URL separate from the application.</td></tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <h3 id="karmaCommands">Karma Commands</h3>\r\n    <!--Need to update -> Karma implementation was discontinued after Angular2 went release candidate -->\r\n    Karma is a unit test runner currently configured to use Jasmine for unit testing, and Chrome as the test browser.  Karma is executed as part of several existing Gulp tasks, but also can be run from the console by preceding it with the name “karma” (example: karma start).  Karma is configured from the file “karma.config.js” where it loads all files needed to support the unit test.  When adding any 3rd party libraries to the application, make sure to also add them to the Karma configuration file.  Karma also uses a file named “karma-test-shim.js” where it sets Jasmine timeouts and path information along with preparing the SystemJS library for module importing.\r\n    <br/>\r\n    <br/>\r\n    <div class="table-responsive">\r\n        <table class="table table-striped table-hover">\r\n            <thead><tr class="success"><td>Command</td><td>Description</td></tr></thead>\r\n            <tbody>\r\n                <tr><td>start</td><td>Starts execution of all discovered unity tests (files ending in “spec.ts”).  It is usually recommended to use the Gulp task “test” as it ensures all files are compiled before executing any tests, but sometime if you know all files are compiled, it is faster to just directly execute karma start.</td></tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <h3 id="vsCodeCommands">Visual Studio Code Commands</h3>\r\n    Visual Studio Code supports hundreds of keyboard shortcuts that are all customizable from the menu item “File > Preferences > Keyboard Shortcuts”.  A few of the frequently used keyboard shortcuts are listed here for those less familiar with Visual Studio Code.\r\n    <br/>\r\n    <br/>\r\n    <div class="table-responsive">\r\n        <table class="table table-striped table-hover">\r\n            <thead><tr class="success"><td>Command</td><td>Description</td></tr></thead>\r\n            <tbody>\r\n                <tr><td>F1</td><td>Show all commands</td></tr>\r\n                <tr><td>Alt+Click</td><td>Create multiple cursors where any keystrokes are applied to all active cursors</td></tr>\r\n                <tr><td>Ctrl+2</td><td>Opens a vertical split and second window.  Can also do Control+3, etc. for more windows.</td></tr>\r\n                <tr><td>Ctrl+B</td><td>Toggles opening and closing the sidebar</td></tr>\r\n                <tr><td>Ctrl+K then Ctrl+C</td><td>Comments out selected rows</td></tr>\r\n                <tr><td>Ctrl+K then Ctrl+U</td><td>Uncomments selected rows</td></tr>\r\n                <tr><td>Ctrl+P</td><td>Show custom commands such as gulp tasks when followed by "task " to get a dropdown list of tasks</td></tr>\r\n                <tr><td>Ctrl+S</td><td>Save current file</td></tr>\r\n                <tr><td>Ctrl+Alt+F</td><td>Format code</td></tr>\r\n                <tr><td>Ctrl+Shift+C</td><td>Opens a comand prompt external to VS code</td></tr>\r\n                <tr><td>Ctrl+~</td><td>Opens a comand prompt internal to VS code</td></tr>\r\n                <tr><td>Ctrl+Space</td><td>Trigger suggestion (intellisense)</td></tr>\r\n                <tr><td>Ctrl+Tab</td><td>Switch between recently accessed files</td></tr>\r\n                <tr><td>Ctrl+]</td><td>Indent selected rows</td></tr>\r\n                <tr><td>Ctrl+[</td><td>Outdent selected rows</td></tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <br/>\r\n    Visual Studio Code also supports customizing settings at either the workspace or user level.  This project has some custom settings designed at improving the development experience.  Feel free to override these workspace settings with your own custom user settings, but do not update the workspace settings directly as they are the recommended defaults are managed along with the rest of the application through version control.<br/>\r\n    <br/>\r\n    The basic customizations made are to hide JavaScript files where there is a Typescript file of the same name, and to hide map files.  These changes simplify the Explorer view cleaner making it quicker to find the important editable files.  Some minor additional customizations were also added to automatically format code while typing and to remove trailing whitespace and enforce the requirement for semicolons on each line.<br/>\r\n    <br/>\r\n    <h3 id="gitBranching">Git Version Control Branching Recomendations</h3>\r\n    It is recommended that this application follow a hybrid approach between <a href="http://nvie.com/posts/a-successful-git-branching-model/">git-flow</a> and <a href="http://scottchacon.com/2011/08/31/github-flow.html">github-hub</a>, mainly sticking to the git-flow model only because of an existing strategy around continuous integration with multiple the multiple environments (dev, qa, staing, and production). Like git-flow, there will be a branch maintained for each permanent hosting environment (usually dev, qa. staging, and production).  If you have read git-flow, the “qa” and “staging” branches can be thought of as that document’s “release” branches.  The production branch will always be called “master” and it should always be in a production ready state.  Anytime an environment branch is updated, continuous integration should immediately update its respective hosting environment.<br/>\r\n    <br/>\r\n    New feature branches should be created from the “dev” branch and merged back into the “dev” branch when ready for integration testing.  When QA is ready to test a new release, the “dev” branch can be merged into the “qa” branch.  Any bugs found in QA would be fixed in its own branch cloned from “qa”, and when complete pushed back to both the “qa” and “dev” branches.  Likewise, any bugs fixed in the “master” branch would have to also be merged into the other environment branches.<br/>\r\n    <br/><br/><br/>\r\n</article>'},143:function(e,t,r){e.exports=r.p+"assets/asp-net-angular2-300x176.84832e79105e9d1a7b9d1e5fdbe2f76b.jpg"},144:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var a,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=r(3),i=r(24),s=r(22),d=function(){function HelpNavComponent(e,t){this._location=e,this._router=t}return HelpNavComponent.prototype.currentPage=function(e){var t=!1,r=this._location.path();return t=0===e.length?0===r.length:r===e},HelpNavComponent=n([o.Component({moduleId:e.id.toString(),selector:"help-nav",styles:[r(145)],template:r(146)}),a("design:paramtypes",["function"==typeof(t="undefined"!=typeof s.Location&&s.Location)&&t||Object,"function"==typeof(d="undefined"!=typeof i.Router&&i.Router)&&d||Object])],HelpNavComponent);var t,d}();t.HelpNavComponent=d},145:function(e,t){e.exports=".nav a {\r\n    -webkit-transition: 500ms all;\r\n    transition: 500ms all;\r\n}\r\n.nav a:hover {\r\n    font-weight: bold;\r\n    letter-spacing: 0.075em;\r\n    margin-left: -20px;\r\n    -webkit-transition: 500ms all;\r\n    transition: 500ms all;\r\n}\r\n"},146:function(e,t){e.exports='<div>\r\n    <nav class="affix animated slideInLeft">\r\n        <ul class="nav nav-pills nav-stacked">\r\n            <li [class.active]="currentPage(\'/help\') || currentPage(\'/help?id=gettingStarted\')"><a [routerLink]="[\'/help\']" [queryParams]="{id:\'gettingStarted\'}">Getting Started</a></li>\r\n            <li [class.active]="currentPage(\'/help?id=clientLibraries\')"><a [routerLink]="[\'/help\']" [queryParams]="{id:\'clientLibraries\'}">Client Libraries</a></li>\r\n            <li [class.active]="currentPage(\'/help?id=serverLibraries\')"><a [routerLink]="[\'/help\']" [queryParams]="{id:\'serverLibraries\'}">Server Libraries</a></li>\r\n            <li [class.active]="currentPage(\'/help?id=gulpCommands\')"><a [routerLink]="[\'/help\']" [queryParams]="{id:\'gulpCommands\'}">Gulp Commands</a></li>\r\n            <li [class.active]="currentPage(\'/help?id=npmCommands\')"><a [routerLink]="[\'/help\']" [queryParams]="{id:\'npmCommands\'}">NPM Commands</a></li>\r\n            <li [class.active]="currentPage(\'/help?id=karmaCommands\')"><a [routerLink]="[\'/help\']" [queryParams]="{id:\'karmaCommands\'}">Karma Commands</a></li>\r\n            <li [class.active]="currentPage(\'/help?id=vsCodeCommands\')"><a [routerLink]="[\'/help\']" [queryParams]="{id:\'vsCodeCommands\'}">VS Code Commands</a></li>\r\n            <li [class.active]="currentPage(\'/help?id=gitBranching\')"><a [routerLink]="[\'/help\']" [queryParams]="{id:\'gitBranching\'}">Git Branching</a></li>\r\n        </ul>\r\n    </nav>\r\n</div>'},147:function(e,t,r){"use strict";var n=r(24),a=r(138),o=r(141);t.routing=n.RouterModule.forChild([{path:"",component:a.HelpComponent,children:[{path:"",component:o.HelpHomeComponent}]}])}});