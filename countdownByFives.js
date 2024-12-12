//Log positive numbers starting at 50, counting down by fives (exclude 0).


function countdownByFives(){

    for (var i = 50; i>=0; i-=5){

        if (i > 0){
            console.log(i);
        }
    }

}

countdownByFives();