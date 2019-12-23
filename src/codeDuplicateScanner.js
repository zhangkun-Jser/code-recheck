const fs = require('fs');
const path = require('path');
const filepaths = require('filepaths');
const Inspector = require('jsinspect/lib/inspector');
const MarkdownReporter = require('./markdownReporter');

const defaultOptions = {
  "threshold":     30,
  "identifiers":   true,
  "literals":      true,
  "minInstances":  2,
  "truncate":      100,
};

const ignorePatterns = ['test', 'mock', 'node_modules', 'gen-nodejs'];
const extensions = ['.js', '.jsx', '.ts', '.tsx']

const run = (projectInfo, output = './report' , ext = extensions , ignore = ignorePatterns) => new Promise((resolve) => {
  let projectName = '代码重复报告', suppliedPaths;

  if(typeof projectInfo == 'object'){
    projectName = projectInfo.name;
    const projectPath = path.join('./output' , projectName);
    const srcPath = path.join(projectPath, 'src');
    suppliedPaths = fs.existsSync(srcPath) ? srcPath : projectPath;
  }else if(typeof projectInfo == 'string'){
    if(!fs.existsSync(projectInfo)) throw new Error('当前文件路径不存在')
    suppliedPaths = projectInfo
  }else throw new Error(`传入参数格式错误, projectInfo应该为object或字符串，当前是${projectInfo}`)

  const paths = filepaths.getSync(suppliedPaths, {
    ext,
    ignore
  });

  if (!paths.length) {
    throw new Error(`No ${extensions.join(' ')} files found in the list of paths`);
  }

  const inspector = new Inspector(paths, defaultOptions);

  new MarkdownReporter(inspector, {
    ...defaultOptions,
    outputFilePath: path.join(output, `${projectName}.md`),
    projectInfo,
  });

  inspector.on('end', () => {
    process.nextTick(resolve);
    // setTimeout(resolve, 300);
  })
  inspector.run();
});

module.exports = run;
