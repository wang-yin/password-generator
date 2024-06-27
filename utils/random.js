function getRandomString(string) {
  return Math.floor(Math.random() * string.length)
}

module.exports = { getRandomString }