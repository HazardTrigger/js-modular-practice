# js-modular-practice
commonjs,amd,es6模块化学习代码

## browserify与babel的代码转换命令

```shell
    npm i -g browserify babel
    npm i --save-dev @babel/core @babel/cli @babel/preset-env browserify
    npx babel js/src -d js/build
    npx browserify js/build/main.js -o js/dist/bundle.js
```
