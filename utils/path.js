const path = require('path')

const pathFile = (folder, file = '') => path.join(path.dirname(process.mainModule.filename), folder, file)

module.exports = pathFile