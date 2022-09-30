const styles = {
  'el-rate': '.el-rate{display: inline-block; vertical-align: text-top;}',
  'el-upload': '.el-upload__tip{line-height: 1.2;}'
}

function addCss(cssList, el) {
  const css = styles[el.__config__.tag]
  css && cssList.indexOf(css) === -1 && cssList.push(css)
  if (el.__config__.children) {
    el.__config__.children.forEach(el2 => addCss(cssList, el2))
  }
}

export function makeUpCss(conf) {
  const cssList = []
  conf.fields.forEach(el => addCss(cssList, el))
  // 复制按钮样式
  for (let i = 0; i < conf.fields.length; i++) {
    if (conf.fields[i].copy) {
      cssList.push(`
      .row-form-item-copy{
        margin: 0 0 20px 20px;
        border: 1px dashed #d79696;
        border-radius: 5px;
        padding: 10px;
        text-align: center;
        font-size: 15px;
        color: #d79696;
        cursor: pointer;
      }
      .row-form-item-copy i{
        margin-right: 10px
      }
      `)
      break
    }
  }
  return cssList.join('\n')
}
