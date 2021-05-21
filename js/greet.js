var countElem = document.querySelector('.counter');
var greetingsBtn = document.querySelector('.Greet-Me');
var clearAllBtn = document.querySelector('.Clear');
var output = document.querySelector('.greet-output')
var input = document.querySelector('.name-input')
var errorElem = document.querySelector('.errors')

var namesArray = []

if(localStorage['theName']){
    namesArray = JSON.parse(localStorage.getItem('theName')) 
}

var greetingInstance = Greet(namesArray)
    
greetingsBtn.addEventListener('click', function(){
  var selected = document.querySelector('input[name="language"]:checked')
  if(selected){
  
    greetingInstance.setName(input.value)
    output.innerHTML =  greetingInstance.languageSelected(selected.value, input.value)
    localStorage.setItem('theName', JSON.stringify(greetingInstance.getNameList()))
    countElem.innerHTML =  greetingInstance.greetingsCounter()
  }else {
 errorElem.innerHTML = greetingInstance.errorMsg(selected, input.value)
  }
})

clearAllBtn.addEventListener('click', function(){
    localStorage.clear();
    location.reload()
})

countElem.innerHTML =  greetingInstance.greetingsCounter()





