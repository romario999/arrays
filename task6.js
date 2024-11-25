function removeDuplicates(nums) {
    let k = 0;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k]) {
            k++;
            nums[k] = nums[i];
        }
    }
    
    return k + 1;
}

let nums1 = [1, 1, 2];
let k1 = removeDuplicates(nums1);
console.log(k1, nums1);

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2 = removeDuplicates(nums2);
console.log(k2, nums2);
