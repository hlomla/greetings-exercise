var countElem = document.querySelector('.counter');
var greetingsBtn = document.querySelector('.Greet-Me');
var clearAllBtn = document.querySelector('.Clear');
var output = document.querySelector('.greet-output')
var input = document.querySelector('.name-input')
var errorElem = document.querySelector('.errors')


var namesArray;

if (localStorage['theName']) {
  namesArray = JSON.parse(localStorage.getItem('theName'))

}

var greetingInstance = Greet(namesArray)

if(greetingInstance.greetingsCounter()){
  countElem.innerHTML = greetingInstance.greetingsCounter()

}


greetingsBtn.addEventListener('click', function () {
  var selected = document.querySelector('input[name="language"]:checked')
  
  setTimeout(function(){errorElem.innerHTML = greetingInstance.timeOutErr() }, 3000);
  
  const errorMessage = greetingInstance.errorMsg(selected, input.value);
  if (errorMessage) {
    errorElem.innerHTML = errorMessage;
  } else {

    greetingInstance.setName(input.value)
    output.innerHTML =  greetingInstance.languageSelected(selected.value, input.value)
    localStorage.setItem('theName', JSON.stringify(greetingInstance.getNameList()))
    countElem.innerHTML = greetingInstance.greetingsCounter()
  }

})

clearAllBtn.addEventListener('click', function () {
  localStorage.clear();
  location.reload()
})







