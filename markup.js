module.exports.header = function (level, text) {
  return {
    type: 'header',
    level: level,
    text: text
  }
}

module.exports.anchor = function (name) {
  return {
    type: 'anchor',
    name: name
  }
}

module.exports.link = function (target, text) {
  return {
    type: 'link',
    target: target,
    text: text || target
  }
}

module.exports.text = function (text) {
  return {
    type: 'text',
    text: text
  }
}

module.exports.tableHeader = function () {
  return {
    type: 'table.header'
  }
}

module.exports.tableHeaderRow = function () {
  return {
    type: 'table.header-row',
    labels: Array.prototype.slice.call(arguments)
  }
}

module.exports.tableRow = function () {
  return {
    type: 'table.row',
    values: Array.prototype.slice.call(arguments)
  }
}

module.exports.tableFooter = function () {
  return {
    type: 'table.footer'
  }
}
