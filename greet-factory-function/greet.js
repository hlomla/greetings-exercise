function Greet(names) {
    var nameList = [];
    nameList = names

    //greet people with different
    function languageSelected(language, myName){
        var  name = myName.charAt(0).toUpperCase()  + myName.slice(1).toLowerCase()
        
        if(language === "isiXhosa") {
            return "Molo, " + name
        }
        if(language === "Greek") {
            return "Geia, " + name
        }
        if(language === "English") {
            return "Hello, " + name
        }

    } 


    function setName(myName){
        var  name = myName.charAt(0).toUpperCase()  + myName.slice(1).toLowerCase()
        if(!nameList.includes(name)){
            nameList.push(name)
        
        }
    }
    function getNameList(){
        return nameList
    }
    
    function greetingsCounter(){
       return nameList.length
    }


    //FUNCTION THAT WILL RETURN ALL THE NAMES
    


return {
    setName,
    greetingsCounter,
    languageSelected,
    getNameList,
}
}
