function checkNumber(myNumber){
    if (myNumber > 90 && myNumber <= 100){
        console.log("A");
    } 
    else if (myNumber > 80 && myNumber <= 90){
        console.log("B");
    } 
    else {
        console.log("C");
    }
}

checkNumber(90);
checkNumber(100);
checkNumber(70);