let inArr = [12,34,1,16,28];
let newArr;
for (let i = 0; i < inArr.length; i++){
    for (let j =0; j < inArr.length; j++){
        if (inArr[j] > inArr[i]){
            newArr = inArr[j];
            inArr[j] = inArr[i];
            inArr[i] = newArr;
        }
    }
}
console.log ("Array after re-arrange: " + inArr);