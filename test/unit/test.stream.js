var test = require('tape')
var Builder = require('../../index')
var Writable = require('readable-stream').Writable

test('pushes data to stream', function (t) {
  t.plan(1)
  var a = []
  var w = new Writable({objectMode: true})
  w._write = function (data) { a.push(data) }
  var b = new Builder(w)
  b.header(2, 'test')
  setImmediate(function verify () {
    t.deepEqual(a, [{type: 'header', level: 2, text: 'test'}])
  })
})
