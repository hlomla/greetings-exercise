function Greet(names) {
    var nameList = names || [];

    function languageSelected(language, myName) {
        if (language === "isiXhosa") {
            return "Molo, " + myName
        }
        if (language === "Greek") {
            return "Geia, " + myName
        }
        if (language === "English") {
            return "Hello, " + myName
        }

    }


    function setName(myName) {
        if (!nameList.includes(myName)) {
            nameList.push(myName)
        }
    }
    function getNameList() {
        return nameList
    }

    function greetingsCounter() {
        return nameList.length
    }
    
    function errorMsg(language, myName) {
        if (language !== null ||  myName === undefined  ) {
            return "Please enter name!"
        }
       else if (language === null && myName.trim().length === 0) {
            return "Please enter name and select language!"
        }

       else if (language === null && myName !== undefined) {
            return "Please select a language!"
        }
        return '';
    }
function timeOutErr(){
    return ""
}

    return {
        setName,
        greetingsCounter,
        languageSelected,
        getNameList,
        errorMsg,
        timeOutErr
    }          
}
