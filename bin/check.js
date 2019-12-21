#!/usr/bin/env node

const path = require('path');
const codeDuplicateScanner = require('../src/codeDuplicateScanner');

codeDuplicateScanner(path.resolve('./'), path.resolve('./'))
  .then(()=>console.log('请查看当前执行目录下的【重复代码.md】'))
