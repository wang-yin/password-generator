const { getRandomString } = require('../../utils/random')


function generatePassword (option) {
    const low = 'abcdefghijklmnopqrstuvwxyz'
    const up = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const num = '0123456789'
    const sym = '!@#$%^&*()-_=+/?,.<>`~;:[]{}'
  
  
  let collection = []

  if(option.lowercase === 'on') {
    collection = collection.concat(low.split(''))
  }
  if(option.uppercase === 'on') {
    collection = collection.concat(up.split(''))
  }
  if(option.numbers === 'on') {
    collection = collection.concat(num.split(''))
  }
  if(option.symbols === 'on') {
    collection = collection.concat(sym.split(''))
  }

  if(option.exclude) {
    collection = collection.filter((char) => {
      return !option.exclude.includes(char)
    })
  }

  

  if (collection.length == 0 || option.length < 4) {
    return renderErr()
  }


  let password = '';
  for (i = 1; i <= option.length; i++) {
    password += collection[getRandomString(collection)]
  }
  
   return renderPassword(password);
}



function renderErr() {
  return `<div class="alert alert-danger" role="alert">
    There is no vaild characters in your selection.
  </div>`
}

function renderPassword(password) {
  return `<div class="alert alert-success" role="alert">
    Your password is: ${password}
  </div>`
}


module.exports = { generatePassword }