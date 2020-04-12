
const fs = require('fs')
const path = require('../utils/path')
module.exports = class Product {
    constructor(t) {
        this.title = t
    }

    save() {
        const p = path('data', 'products.json')
        fs.readFile(p, (err, fileContent) => {
            let products = []
            if (!err) {
                products = JSON.parse(fileContent)
            }
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log('err', err)
            })
            console.log('fileContent', fileContent)
        })
    }

    static fetchAll() {
        const p = path('data', 'products.json')
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                return []
            }
            return JSON.parse(fileContent)
        })
    }
}