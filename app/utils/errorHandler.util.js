var colors = require ('colors')

function handleDatabaseError (err) {
  console.log (colors.bgRed ('ERR') + `DB error: ${err}`)
}

module.exports = {
  handleDatabaseError
}