// A)
/**
 * insertion sort algorithm
 *
 * @param list
 * @returns {Array}
 */
const insertionSort = function (list) {
    for (var i = 0; i < list.length; i++) {
        let value = list[i];
        // store the current item value so it can be placed right
        for (var j = i - 1; j > -1 && list[j] > value; j--) {
            // loop through the list in the sorted array (the list from the current to the beginning)
            // copy each item to the next one
            list[j + 1] = list[j];
        }
        // the last item we've reached should now hold the value of the currently sorted item
        list[j + 1] = value;
    }

    return list;
};

/**
 * Sort 11 random numbers that are < then 100, as fast as possible
 *
 */
let list = [];
while(list.length < 11) {
    let randomNumber = Math.floor(Math.random()*100) + 1;
    if(list.includes(randomNumber)) continue;
    list[list.length] = randomNumber;
}

console.log('Sort result: ', insertionSort(list));

let start = process.hrtime();
insertionSort(list);
let end = process.hrtime(start);

console.info('Running sorting algorithm 10 billion execution time: %dms', (Math.pow(10, 10) * (end[1]/ 1000000)));