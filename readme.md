# 一键查重，还记得毕业论文查重的感觉吗？是时候对你的项目进行检测了

[![NPM](https://nodei.co/npm/code-recheck.png)](https://nodei.co/npm/code-recheck/)

在开发的过程中我们往往会存在大量的复制粘贴代码的行为，这一点在项目的开发初期尤其显著；而在项目逐步稳定，功能需求逐步完善之后我们就需要考虑对代码库的优化与重构，尽量编写清晰可维护的代码。好的代码往往是在合理范围内尽可能地避免重复代码，遵循单一职责与 Single Source of Truth 等原则。

这个工具会对代码库进行自动检索，根据其反馈的重复或者近似的代码片进行合理的优化。当然，我们并不是单纯地追求公共代码地完全剥离化，过度的抽象反而会降低代码的可读性与可理解性。结合实际项目场景合理抽离复用，走上升职加薪的康庄大道。

[代码重复报告输出示例](./report/case.md)


## 使用方法
### 1. 支持传入多个远程git项目列表，批量生成代码重复报告输出到指定地址。

```js
const { check } = require('code-recheck');
 
const list = [
            {
              "name": "内部测试项目", //项目名，也是输出文件名
              "gitPath": "https://github.com/zhangkun-Jser/auto-form-create",
            }
          ]

const path = '/Users/zhangkun/Desktop' //如果不填生成的代码重复报告将输出到code-recheck模块下的report文件夹

//如果是公司内部的gitLab需要传入账户密码才能有权限拉取代码
const user = 'gituser'; 
const password = 'gitpassword';

const params = {list,path,user,password};

check(params)
```

#### 参数

| Prop     | Type   | Description  | default |  required |
| -------- | ------ | ------------ | ------- | ------- |
| list    | Array<{name: string, gitPath: string}> | git项目仓库列表  | -       | 必填     |
| path | string   | 代码重复报告输出路径 | code-recheck/report | 非必填     |
| user | string   | git用户名 | -     | 非必填     |
| password | string   | git密码 | -     | 非必填     |

### 2. 支持命令行调用检查本地文件
首先全局安装本模块
```js
npm i code-recheck -g
```
然后命令行中定位到项目目录，敲入check命令执行查重，检查完成后会在当前目录下生成代码重复报告。

## Changelogs
 1.1.0
 - 支持本地文件检查，在当前目录下输出代码重复报告
