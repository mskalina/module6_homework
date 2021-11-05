function AllNumBw(a, b){
    numbers = [];
    i=0;
    while (i<b-a+1){
    numbers [i] = a+i;
    i=i+1; 
    }
    i=0;
    let num = setInterval(function(){
        console.log(numbers[i])
        i=i+1
        if (i==b-a+1){
            clearInterval(num);
        }
        }, 1000) 
}
AllNumBw(1,5);