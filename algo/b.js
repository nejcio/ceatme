// B)
/**
 * Quick sort algorithm
 *
 * @param list
 * @returns {Array}
 */

const quickSort = function(list) {
    if (list.length < 2)
        return list;
    let pivot = list[0],
        left  = [],
        right = [];
    for (let i = 1, total = list.length; i < total; i++) {
        if (list[i] < pivot)
            left.push(list[i]);
        else
            right.push(list[i]);
    }
    return [
        ...quickSort(left),
        pivot,
        ...quickSort(right)
    ];
};

/**
 * Sort 10000 random powers (a^b) where a and b are random numbers between 100 and 10000
 *
 */
let list = [];
while(list.length < 10000) {
    let a = Math.floor(Math.random()*10000) + 100,
        b = Math.floor(Math.random()*10000) + 100,
        randomNumber = Math.pow(a, b);

    if(list.includes(randomNumber)) continue;
    list[list.length] = randomNumber;
}

console.log('List:', list);
console.log('Sort result: ', quickSort(list));

let start = process.hrtime();
quickSort(list);
let end = process.hrtime(start);

console.info('Sorting (Quicksort) execution time: %ds %dms', end[0], end[1] / 1000000);
