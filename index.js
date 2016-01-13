var each = require('util-each')
var markup = require('./markup')

module.exports = Markup

function Markup (stream) {
  this.stream = stream
}

each(markup, function (fun, key) {
  Markup.prototype['_' + key] = fun
  Markup.prototype[key] = function () {
    this.stream.write(fun.apply(null, arguments))
  }
})
