var each = require('util-each')
var isStream = require('is-stream')
var markup = require('./markup')

module.exports = Markup

function Markup (stream) {
  if (!isStream.writable(stream)) {
    throw new Error('Expected writable stream')
  }
  this.stream = stream
}

each(markup, function (fun, key) {
  Markup.prototype['_' + key] = fun
  Markup.prototype[key] = function () {
    this.stream.write(fun.apply(null, arguments))
  }
})
