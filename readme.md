# 一键查重，还记得毕业论文查重的感觉吗？是时候对你的项目进行检测了

[![npm](https://img.shields.io/npm/dt/code-recheck.svg)](https://www.npmjs.com/package/code-recheck)
[![Build Status](https://img.shields.io/appveyor/ci/gruntjs/grunt/master.svg)
![LICENSE MIT](https://img.shields.io/npm/l/code-recheck.svg)](https://www.npmjs.com/package/code-recheck)

[![NPM](https://nodei.co/npm/code-recheck.png)](https://nodei.co/npm/code-recheck/)


在开发的过程中我们往往会存在大量的复制粘贴代码的行为，这一点在项目的开发初期尤其显著；而在项目逐步稳定，功能需求逐步完善之后我们就需要考虑对代码库的优化与重构，尽量编写清晰可维护的代码。好的代码往往是在合理范围内尽可能地避免重复代码，遵循单一职责与 Single Source of Truth 等原则。

这个工具会对代码库进行自动检索，根据其反馈的重复或者近似的代码片进行合理的优化。当然，我们并不是单纯地追求公共代码地完全剥离化，过度的抽象反而会降低代码的可读性与可理解性。结合实际项目应用场景合理抽离复用，才能走上升职加薪的康庄大道。

[代码重复报告输出示例](./report/case.md)

## 使用方法
### 1. 支持传入多个远程git项目列表，批量生成代码重复报告输出到指定地址。

```js
const check = require('code-recheck');
 
const list = [
              {
                "name": "测试项目1", //生成的重复报告将以此命名
                "gitPath": "https://github.com/zhangkun-Jser/autils",
              },
              {
                "name": "测试项目2", 
                "gitPath": "https://github.com/zhangkun-Jser/auto-form-create",
              }
             ]

const path = '/Users/zhangkun/Desktop' //如果不填生成的代码重复报告将输出到code-recheck模块下的report文件夹

const ext = ['.es6'] //默认检查的文件格式列表是['.js', '.jsx', '.ts', '.tsx']，可传入ext参数替代

const ignore = ['spec'] //默认忽略的文件夹列表是['test', 'mock', 'node_modules', 'gen-nodejs']，可传入ignore参数替代

//如果是公司内部的gitLab需要传入账户密码才有权限拉取代码
const user = 'gituser'; 
const password = 'gitpassword';

const params = {list, path, ext, ignore, user ,password};

check(params)
```

#### 参数

| Prop     | Type   | Description  | default |  required |
| -------- | ------ | ------------ | ------- | ------- |
| list    | Array<{name: string, gitPath: string}> | git项目仓库列表  | -       | 必填     |
| path | Array   | 代码重复报告输出路径 | code-recheck/report | 非必填     |
| ext | Array   | 检查的文件格式 | ['.js', '.jsx', '.ts', '.tsx'] | 非必填     |
| ignore | string   | 忽略的文件夹 | ['test', 'mock', 'node_modules', 'gen-nodejs'] | 非必填     |
| user | string   | git用户名 | -     | 非必填     |
| password | string   | git密码 | -     | 非必填     |

### 2. 支持命令行调用检查本地文件
首先全局安装本模块

```js
npm i code-recheck -g
```
然后命令行中定位到项目目录，敲入check命令执行查重，检查完成后会在当前目录下生成代码重复报告。

```sh
$ check

检测已完成，请查看当前执行目录下的【代码重复报告.md】
```

## Changelogs
 1.1.0
 - 支持本地文件检查，在当前目录下输出代码重复报告
