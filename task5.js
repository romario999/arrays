function merge(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}

let nums1_1 = [1, 2, 3, 0, 0, 0];
merge(nums1_1, 3, [2, 5, 6], 3);
console.log(nums1_1);

let nums1_2 = [1];
merge(nums1_2, 1, [], 0);
console.log(nums1_2);

let nums1_3 = [0];
merge(nums1_3, 0, [1], 1);
console.log(nums1_3);
