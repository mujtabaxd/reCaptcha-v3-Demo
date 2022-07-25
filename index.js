
function getRecaptchaToken() {
  grecaptcha.ready(function () {
    grecaptcha.execute('6Le8iRAhAAAAAPMXtuCuqxI07KZ48Vsa2GSIRYwJ', { action: 'verifyToken' })
      .then((token) => {
        console.log('Token retrieved. Sending request to backend...')
        verifyRecaptchaToken(token)
      });
  });
}

function verifyRecaptchaToken(token) {
  const requestOptions = {
    method: 'GET'
  }

  fetch('validate.php?token=' + token, requestOptions)
    .then((response) => {
      return response.json()
    })
    .then(data => {
      // console.log(data)
      var respDiv = document.getElementById('response')
      respDiv.innerHTML = data
    })
    .catch(error => console.log('site-verify-error', error))
}

function test() {
  var requestOptions = {
    method: 'POST'
  }

  fetch("validate.php?test=123", requestOptions)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      console.log(data);
      const respDiv = document.getElementById('response')
      respDiv.innerHTML = JSON.stringify(data)
      // if (data.match('success')) {
      //   respDiv.innerHTML = data
      // }
    })
    .catch((error) => {
      console.error(error)
    })
}