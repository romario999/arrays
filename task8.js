function validMountainArray(arr) {
    let n = arr.length;
    
    if (n < 3) return false;
    
    let i = 0;

    while (i + 1 < n && arr[i] < arr[i + 1]) {
        i++;
    }

    if (i === 0 || i === n - 1) return false;
    
    while (i + 1 < n && arr[i] > arr[i + 1]) {
        i++;
    }
    return i === n - 1;
}

let arr1 = [2, 1];
console.log(validMountainArray(arr1));

let arr2 = [3, 5, 5];
console.log(validMountainArray(arr2));

let arr3 = [0, 3, 2, 1];
console.log(validMountainArray(arr3));
