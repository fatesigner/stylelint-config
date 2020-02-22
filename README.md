# stylelint-config

[![build][build-image]][build-url]
[![commitizen][commitizen-image]][commitizen-url]
[![download][download-image]][download-url]
[![npm][npm-image]][npm-url]
[![semantic][semantic-image]][semantic-url]

[build-image]: https://travis-ci.com/forgleaner/stylelint-config.svg?color=green&token=i21P7stb8bZPNjZakvsi&branch=master
[build-url]: https://travis-ci.com/forgleaner/stylelint-config
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-green.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
[download-image]: https://img.shields.io/npm/dw/@forgleaner/stylelint-config.svg?color=yellowgreen
[download-url]: https://npmjs.com/package/@forgleaner/stylelint-config
[npm-image]: https://img.shields.io/npm/v/@forgleaner/stylelint-config.svg?color=blue&logo=npm
[npm-url]: https://npmjs.com/package/@forgleaner/stylelint-config
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[semantic-url]: https://opensource.org/licenses/MIT

stylelint通用规则

**基于 [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard).**

## Install
```bash
npm i @forgleaner/stylelint-config -D
```

## 使用
添加以下代码到 `stylelint.config.js`
```javascript
module.exports = {
  extends: '@forgleaner/stylelint-config'
}
```
