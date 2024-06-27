const form = document.getElementById('form')


form.addEventListener('submit', function onFormSubmit(event) {
  
  if(!form.checkValidity()) {
    event.stopPropagation()
    event.preventDefault()
    form.classList.add('was-validated')
  }
})