const git = require('simple-git/promise');
const path = require('path');
const fs = require('fs');

const USER = 'bizfe';
const PASS = '1hxSh0r$';
 
const getRepo = (repoWithoutPass) => `http://${USER}:${PASS}@${repoWithoutPass.replace(/^http:\/\//g, '').replace(/#master$/g, '')}`;

const cloneRepoIfNeeded = (projectInfo) => {
  const projectName = projectInfo.pro;
  const { gitPath } = projectInfo;
  const localPath = path.join('./output', projectName);

  if(fs.existsSync(localPath)) {
    console.log(`${localPath} exists, skip clone repo`);
    return Promise.resolve();
  }

  return git()
    .clone(getRepo(gitPath), localPath, ['--depth=1'])
    .then(() => console.log(`${projectName} finished`))
    .catch((err) => console.error('failed: ', err));
};

module.exports = cloneRepoIfNeeded;
