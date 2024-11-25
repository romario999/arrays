function sortByParity(nums) {
    let even = [];
    let odd = [];
    
    for (let num of nums) {
        if (num % 2 === 0) {
            even.push(num);
        } else {
            odd.push(num);
        }
    }
    
    return [...even, ...odd];
}

let nums1 = [3, 1, 2, 4];
console.log(sortByParity(nums1));

let nums2 = [0];
console.log(sortByParity(nums2));
