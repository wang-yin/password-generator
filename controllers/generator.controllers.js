const { generatePassword } = require('../public/javascripts/generator')

const generatorController = {
  home: (req, res) => {
    res.render('index')
  },
  
  result: (req, res) => {
    const option = req.body
    const result = generatePassword(option)
    res.render('index', {result, option})
  }
}

module.exports = generatorController;