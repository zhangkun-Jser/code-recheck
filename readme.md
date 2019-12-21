# 一键查重，还记得毕业论文查重的感觉吗？是时候对你的项目进行检测了

[![NPM](https://nodei.co/npm/code-recheck.png)](https://nodei.co/npm/code-recheck/)

在开发的过程中我们往往会存在大量的复制粘贴代码的行为，这一点在项目的开发初期尤其显著；而在项目逐步稳定，功能需求逐步完善之后我们就需要考虑对代码库的优化与重构，尽量编写清晰可维护的代码。好的代码往往是在合理范围内尽可能地避免重复代码，遵循单一职责与 Single Source of Truth 等原则。

这个工具会代码库进行自动检索，根据其反馈的重复或者近似的代码片进行合理的优化。当然，我们并不是单纯地追求公共代码地完全剥离化，过度的抽象反而会降低代码的可读性与可理解性。结合实际项目场景合理抽离复用，走上升职加薪的康庄大道。

[查重输出示例](./reports/case.md)


## 使用方法
### 1. 支持传入多个远程git项目列表，批量生成代码重复文件输出到指定地址。

```js
const { check } = require('code-recheck');

const user = 'gituser';
const password = 'gitpassword';
const path = '/Users/zhangkun/Desktop'
 
const list = [{
    "name": "内部测试项目",//项目名，也是输出文件名
    "gitPath": "http://bizgit.sogou/biztech/bizfe/arch/kaleidoscope/kaleidoscope-fe.git",
  }]

check({list,path,user,password})
```

#### 参数

| Prop     | Type   | Description  | default | 
| -------- | ------ | ------------ | ------- |
| list    | Array<{name: string, gitPath: string}> | git项目仓库列表  | -       |
| path | string   | 重复文件输出路径 | ./reports    |
| user | string   | git用户名 | -     |
| password | string   | git密码 | -     |

### 2. 支持命令行调用检查本地文件
首先全局安装本模块
```js
npm i code-recheck -g
```
然后定位到项目目录，直接命令行执行check，检查完成后会在当前目录下生成重复代码.md文件。

## Changelogs
 12月21日
 - 支持本地文件检查，在当前目录下输出重复代码文件
