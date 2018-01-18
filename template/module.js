let writeFile = require('./write-file')
let path = require('path')

module.exports = function (opts) {
  createData(opts, function (data, ModuleName) {
    writeFile({
      data: data,
      directory: path.resolve(__dirname, `../src/components/${ModuleName}/`),
      fileName: `index.vue`,
      codeFormat: {},
      codeType: 'html',
      err: function (err) {
        console.log(`${ModuleName}/index.vue写入错误：${err}`)
      },
      succ: function () {
        console.log(`${ModuleName}/index.vue写入成功！`)
      }
    })
  })
}

function createData(opts, cb) {
  let first = opts.moduleName.substring(0, 1).toLocaleUpperCase()
  let other = opts.moduleName.substring(1)
  let ModuleName = `${first}${other}`
  const data = `<template>
  <div>${opts.moduleName}</div>
</template>

<script>
export default {
  name: '${opts.moduleName}'
}
</script>

<style>
@import url('../../assets/style/index.css');
</style>
  `
  cb && cb(data, ModuleName)
}

