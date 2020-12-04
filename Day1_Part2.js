const fs = require("fs");

fs.readFile("Day1Input.txt", "utf8", function(err, data) {
	//console.log(data)
	let arrayOfNumbers = data.split("\r\n");
	//console.log(arrayOfNumbers)
	for(let i = 0; i<arrayOfNumbers.length; i++){
		for(let f = 0; f<arrayOfNumbers.length; f++){
			for(let j = 0; j<arrayOfNumbers.length; j++){
				
				if(parseInt(arrayOfNumbers[i])+parseInt(arrayOfNumbers[f])+parseInt(arrayOfNumbers[j]) == 2020){
					console.log(arrayOfNumbers[i])
					console.log(arrayOfNumbers[f])
				}
			}
		}
	}
	console.log("Hi")
})