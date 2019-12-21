const BaseReporter = require('jsinspect/lib/reporters/base');
const fs = require('fs');


const PREFIX_GEN = (projectInfo) => `

### project info:
\`\`\`json
${JSON.stringify(projectInfo, null, 2)}
\`\`\`

## prefix

`;

const SUFFIX_GEN = (total) => `
suffix
${total} instance(s) found.
`

const ITEM_TEMPLATE = ({ number, children }) => `
### 序号: ${number}

${children}

`;

const INSTANCE_TEMPLATE = ({ start, end, path, code }) => `
  起止行号: ${start} - ${end}

  代码路径: ${path}
  \`\`\`js
${code}
  \`\`\`

`;

const MAX_CODE_FRAGMENT_LENGTH = 6000;

class MarkdownReporter extends BaseReporter {
  /**
   * A JSON reporter, which displays both file and line information for
   * each given match.
   *
   * @constructor
   *
   * @param {Inspector} inspector Instance on which to register its listeners
   * @param {object}    opts      Options to set for the reporter
   */
  constructor(inspector, opts) {
    opts = opts || {};
    super(inspector, opts);

    const { outputFilePath, projectInfo } = opts;
    this._writableStream = fs.createWriteStream(outputFilePath);
    inspector.on('start', () => {
      this._writableStream.write(PREFIX_GEN(projectInfo));
    });

    inspector.on('end', () => {
      this._writableStream.write(SUFFIX_GEN(this._found));
    });
  }

  /**
   * Returns the string output to print for the given reporter. The formatted
   * JSON string contains the number of instances associated with the match and
   * the files and lines involved.
   *
   * @private
   *
   * @param   {Match}  match The inspector match to output
   * @returns {string} The formatted output
   */
  _getOutput(match) {
    // 忽略压缩过的 js 代码片段，
    // todo: 改进：从解析源头忽略，用来提升性能
    const isOverLength = match.instances.some((instance) => {
      return instance.lines.length > MAX_CODE_FRAGMENT_LENGTH;
    })
    if (isOverLength){
      return '';
    };

    return ITEM_TEMPLATE({
      number: this._found,
      children: match.instances.map(instance => {
        return INSTANCE_TEMPLATE({
          path: this._getRelativePath(instance.filename),
          start: instance.start.line,
          end: instance.end.line,
          code: this._getLines(instance)
        });
      }).join(''),
    });
  }
}

module.exports = MarkdownReporter;
