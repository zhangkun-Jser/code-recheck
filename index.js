const codeDuplicateScanner = require('./codeDuplicateScanner');
const cloneRepoIfNeeded = require('./cloneRepoIfNeeded');

const list = [
  {
    "pro": "内部测试项目",
    "gitPath": "http://bizgit.sogou/biztech/bizfe/arch/kaleidoscope/kaleidoscope-fe.git#master",
  },
];

const runTask = async (projectInfo) => {
  await cloneRepoIfNeeded(projectInfo);
  await codeDuplicateScanner(projectInfo);
};


list.reduce(
  (thenable, projectInfo) => {
    return thenable.then(_ => runTask(projectInfo)).catch(error => console.log('error', {error}));
  },
  Promise.resolve()
)
