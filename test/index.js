const {check} = require('../index.js');

const user = 'bizfe';
const password = '1hxSh0r$';
const path = '/Users/zhangkun/Desktop'
 
const list = [{
    "name": "内部测试项目",
    "gitPath": "http://bizgit.sogou/biztech/bizfe/arch/kaleidoscope/kaleidoscope-fe.git",
  }]

check({list,path,user,password})
