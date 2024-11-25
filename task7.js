function checkIfExist(arr) {
    let set = new Set();
    
    for (let num of arr) {
        if (set.has(num * 2) || (num % 2 === 0 && set.has(num / 2))) {
            return true;
        }
        set.add(num);
    }
    
    return false;
}

let arr1 = [10, 2, 5, 3];
console.log(checkIfExist(arr1));

let arr2 = [3, 1, 7, 11];
console.log(checkIfExist(arr2));
