require('marko/compiler').configure({ writeToDisk: false })
require('lasso').configure(require('./lasso-config'))

const arc = require('@architect/functions')
const template = require('./page')

function route (req, res) {
  template.render({ count: 5 })
    .then(out => res({ html: out.getOutput() }))
    .catch(err => res({ status: 500 }))
}

exports.handler = arc.html.get(route)
