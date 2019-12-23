const check = require('../index.js');

const path = '/Users/zhangkun/Desktop'
 
const list = [{
    "name": "测试项目",
    "gitPath": "https://github.com/zhangkun-Jser/auto-form-create",
  }]

check({
  list,
  path,
})
