function printOdd3to20(){

    for (var i = 3; i<=20; i++){

        if (i%2==0){
            continue;
        }else {
            console.log(i);
        }
    }

}

printOdd3to20();