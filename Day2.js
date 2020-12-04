const fs = require("fs")

fs.readFile("Day2Input.txt", "utf8", function (err, data){
    //split the password instances, \r\n for windows, \r\n for linux
    let passwordsWithPuzzles = data.split("\r\n");
    let numOfValidPass = 0;

    for(i = 0; i < passwordsWithPuzzles.length; i++){
        //Split the passwords into different things
        let string = passwordsWithPuzzles[i].split(" ");
        
        //Grabbing the character that you need to match with //Doubt a remove second string is gonna be more efficient than slice but its the best i've got rn
        let char = string[1].slice(0,1);

        //Making a reg ex of the character, then creating the match array, then just getting the length then parsing
        let charRegEx = new RegExp(char, "g");
        let objectOfString = (string[2].match(charRegEx) || [])
        let numberOfTimes = parseInt(lengthOfString.length)
        
        //Get the min and max into an array
        let arrOfMinMax = string[0].split("-");

        //Checking if its inbetween those numbers
        if( parseInt(arrOfMinMax[0]) <= numberOfTimes && parseInt(arrOfMinMax[1]) >= numberOfTimes ){
            numOfValidPass++;
        }
    }    
    console.log(numOfValidPass)
})