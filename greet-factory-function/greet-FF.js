function Greet(names) {
    var nameList = names || [];

    //greet people with different
    function languageSelected(language, myName) {
        var name = myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase()
        if (language === "isiXhosa") {
            return "Molo, " + name
        }
        if (language === "Greek") {
            return "Geia, " + name
        }
        if (language === "English") {
            return "Hello, " + name
        }

    }


    function setName(myName) {
        var name = myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase()
        if (!nameList.includes(name)) {
            nameList.push(name)
        }
    }
    function getNameList() {
        return nameList
    }

    function greetingsCounter() {
        return nameList.length
    }
    
    function errorMsg(language, myName) {

        if (language === null && myName.trim().length === 0) {
            return "Please enter name and select language!"
        }

        if (!myName || myName.trim().length === 0) {
            return "Please enter name!"
        }

        if (language === null) {
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
