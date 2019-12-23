const fs = require('fs');
const path = require('path');
const { URL } = require('url');
const git = require('simple-git/promise');

const cloneRepoIfNeeded = (projectInfo, user, password) => {
  const {name, gitPath} = projectInfo
  let url = new URL(gitPath);
  url.hash = '';
  if(user) url.username = user;
  if(password) url.password = password;
  const localPath = path.join('./output', name);

  if(fs.existsSync(localPath)) {
    console.log(`${localPath} exists, skip clone repo`);
    return Promise.resolve();
  }

  return git()
    .clone(url.href, localPath, ['--depth=1'])
    .then(() => console.log(`${url.href}已经下载到${localPath}`))
    .catch((err) => console.error('failed: ', err));
};

module.exports = cloneRepoIfNeeded;
