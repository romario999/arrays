function duplicateZeros(arr) {
    let n = arr.length;
    let possibleDups = 0;
    let last = n - 1;
    for (let i = 0; i <= last - possibleDups; i++) {
        if (arr[i] === 0) {
            if (i === last - possibleDups) {
                arr[last] = 0;
                last -= 1;
                break;
            }
            possibleDups++;
        }
    }

    let i = last - possibleDups;

    for (let j = last; i >= 0; i--, j--) {
        if (arr[i] === 0) {
            arr[j] = 0;
            j--;
            arr[j] = 0;
        } else {
            arr[j] = arr[i];
        }
    }
}

let arr1 = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr1);
console.log(arr1);

let arr2 = [1, 2, 3];
duplicateZeros(arr2);
console.log(arr2);
