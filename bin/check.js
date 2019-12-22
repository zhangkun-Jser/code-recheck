#!/usr/bin/env node

const path = require('path');
const codeDuplicateScanner = require('../src/codeDuplicateScanner');

const pwd = path.resolve('./');

codeDuplicateScanner(pwd, pwd)
  .then(()=>console.log('请查看当前执行目录下的【代码重复报告.md】'))
