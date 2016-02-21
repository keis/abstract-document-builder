var test = require('tape')
var Builder = require('../../index')
var Writable = require('readable-stream').Writable

test('header level', function (t) {
  t.plan(2)
  var b = new Builder(new Writable({objectMode: true}))
  var h1 = b._header(1, 'test')
  t.deepEqual(h1, { type: 'header', level: 1, text: 'test' })
  var h2 = b._header(2, 'test')
  t.deepEqual(h2, { type: 'header', level: 2, text: 'test' })
})

test('table header row', function (t) {
  t.plan(1)
  var b = new Builder(new Writable({objectMode: true}))
  var h1 = b._tableHeaderRow('aaa', 'bbb', 'ccc')
  t.deepEqual(h1, { type: 'table.header-row', labels: ['aaa', 'bbb', 'ccc'] })
})

test('table row', function (t) {
  t.plan(1)
  var b = new Builder(new Writable({objectMode: true}))
  var h1 = b._tableRow('aaa', 'bbb', 'ccc')
  t.deepEqual(h1, { type: 'table.row', values: ['aaa', 'bbb', 'ccc'] })
})

test('table row - nested', function (t) {
  t.plan(1)
  var b = new Builder(new Writable({objectMode: true}))
  var l = b._link('foo', 'bar')
  var h1 = b._tableRow('aaa', l)
  t.deepEqual(h1, { type: 'table.row', values: ['aaa', l] })
})

test('document end', function (t) {
  t.plan(1)
  var b = new Builder(new Writable({objectMode: true}))
  var documentEnd = b._documentEnd()
  t.deepEqual(documentEnd, { type: 'document.end' })
})
