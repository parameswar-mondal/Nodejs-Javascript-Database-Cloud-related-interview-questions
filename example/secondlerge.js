
function getSecondLargest(nums) {
    // Complete the function
    nums.sort(function (a, b) { return b - a });
    console.log('nums ', nums);
    let dupChars = nums.filter((c, index) => {
        console.log('nums.indexOf(c): ', c, nums.indexOf(c), index);
        return nums.indexOf(c) == index;
    });
    console.log(dupChars);
    return dupChars[1];
}

let nums = [2, 3, 6, 6, 5];
console.log('getSecondLargest ', getSecondLargest(nums));


function getCount(objects) {
    let count = objects.reduce((result, item) => {
        if (item.x === item.y)
            return result + 1;
        return result;
    }, 0);
    return count;
}
let objects = [
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
    { x: 3, y: 4 },
    { x: 4, y: 5 }
];
console.log(getCount(objects));