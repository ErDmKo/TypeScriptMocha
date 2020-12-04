# Simple TypeScript mocha runer
How to run unit test's whidout any bundlers (webpack, rollup, ...) unsing only tsc compiler and mocha test runer. Whith this setup you can use incremental features TypeScript compler in watch mode.
## NPM scripts
There is list of npm scripts
### Compile
This command will transform ts (TypeScript) files to js (JavaScript). When this command finish this work then directory ./dist will apper.
```
npm run compile
```
### Mocha
This command will run unit tests in node.js enviroment. It will fall if there no files on ./dist directory. All test must ends with 'spec.ts' in other case files won't interpreted as tests.
```
npm run mocha
```
### Watch
This command will run compile command and after that it will run parallel mocha in watch mode and compile in same watch mode. Watch mode means then on any file edition files will be recompile and tests will be runed
To stop execution this comand you can use Ctrl-C hot key.
```
npm run watch
```
