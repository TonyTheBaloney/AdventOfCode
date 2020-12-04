const fs = require("fs")

fs.readFile("day2Input.txt", "utf8", function (err, data){
    //Windows does \r\n
    let passwordsWithPuzzles = data.split("\r\n");
    let numOfValidPass = 0;

    for(i = 0; i < passwordsWithPuzzles.length; i++){
        //split the string into the different parts
        let string = passwordsWithPuzzles[i].split(" ");
        
        //Get the character to find
        let char = string[1].slice(0,1);

        //Find the position
        let arrOfPos = string[0].split("-");
        //Get the password
        let password = string[2]

        //Checking the same thing, just in reverse. Please just fix this
        let firstCharacterPos = password.charAt(arrOfPos[0]-1); 
        let secondCharacterPos = password.charAt(arrOfPos[1]-1)
        //My sad attempt at making this code smaller
        if( (firstCharacterPos == char && secondCharacterPos != char) || (firstCharacterPos != char && secondCharacterPos == char) ){
            numOfValidPass++;
        }


    }    
    console.log(numOfValidPass)
})