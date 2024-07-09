let inArr = [1,2,3,4,5];
let maxNum = inArr[0];
let minNum = inArr[0];
for (let i = 0; i < inArr.length; i++){
    if (inArr[i] < minNum){
        minNum = inArr[i];
    }
    }
for (let j = 0; j < inArr.length; j++){
    if (inArr[j] > maxNum){
        maxNum = inArr[j];
    }
    }
console.log ("Total min number: " + minNum);
console.log ("Total max number: " + maxNum);