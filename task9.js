function replaceElements(arr) {
    let max = -1;
    
    for (let i = arr.length - 2; i >= 0; i--) {
        let temp = arr[i];
        arr[i] = max;
        max = Math.max(max, temp);
    }
    
    arr[arr.length - 1] = -1;
    
    return arr;
}

let arr1 = [17, 18, 5, 4, 6, 1];
console.log(replaceElements(arr1));

let arr2 = [400];
console.log(replaceElements(arr2)); 
