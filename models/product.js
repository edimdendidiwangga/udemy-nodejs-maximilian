
const fs = require('fs')
const path = require('../utils/path')
const p = path('data', 'products.json')

const getDataFromFile = (cb) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return cb([])
        }
        cb(JSON.parse(fileContent))
    })
}
module.exports = class Product {
    constructor(t) {
        this.title = t
    }

    save() {
        getDataFromFile(products => {
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log('err', err)
            })
        })
    }

    static fetchAll(cb) {
        getDataFromFile(cb)
    }
}