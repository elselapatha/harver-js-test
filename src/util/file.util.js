const fs = require('fs')
module.exports = {
    writeToFile: (strAry, name) => new Promise((resolve, reject) => {
        fs.writeFile(`${name} ${new Date().getTime()}.txt`, strAry.join('\n'), (err) => {
            if (err) reject(err)
            resolve('done')
        })
    })
}