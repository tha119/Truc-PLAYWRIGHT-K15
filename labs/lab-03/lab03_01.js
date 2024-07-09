let inArr = [1,2,3,4,5];
let oddNum = 0;
let evenNum = 0;
for (let i = 0; i <inArr.length; i++){
    if (inArr[i] %2 == 0){
        evenNum++;
    }
    else {
        oddNum++;
    }
}
console.log ("Total even number: " + evenNum);
console.log ("Total odd number: " + oddNum);
