const fs = require("fs")

fs.readFile("Day3Input.txt", "utf8", function (err, data){
    //I feel like maybe a double array would be most suitable
    //But long wise we're gonna be about 323 lines
    //let arrayOfTable = [][];

    let aot = new Array(2); 
  
    for (var i = 0; i < aot.length; i++) { 
        aot[i] = new Array(2); 
    }    

    let mapLong = data.split("\n")
    for(let i = 0; i<mapLong.length; i++){
        let mapLat = mapLong[i].split("");
        for(let f = 0; f<mapLat.length; f++){
            aot[i][f] = mapLat[f];
        } 
    }
    console.log(aot);

})
