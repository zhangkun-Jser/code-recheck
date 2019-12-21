/*
 * @Author: zk
 * @Date: 2019-12-19 20:35:48
 * @LastEditTime : 2019-12-20 18:30:27
 * @Description: 优化模块入口
 */
const codeDuplicateScanner = require('./src/codeDuplicateScanner');
const cloneRepoIfNeeded = require('./src/cloneRepoIfNeeded');

const runTask = async (projectInfo, output, user, password) => {
  await cloneRepoIfNeeded(projectInfo, user, password);
  await codeDuplicateScanner(projectInfo, output);
};

const check = ({list, path: output, user, password}) => {

  if(!Array.isArray(list)) throw new Error('传入的参数必须是数组')

  list.reduce(
    (thenable, projectInfo) => {
      return thenable.then(_ => runTask(projectInfo, output, user, password)).catch(error => console.log('error', {error}));
    },
    Promise.resolve()
  )
}

module.exports = {
   check
};
