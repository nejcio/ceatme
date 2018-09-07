# Basic CS
A) 

```
List: [ 23, 19, 35, 9, 5, 100, 62, 15, 84, 71, 93 ]
Sorted result:  [ 5, 9, 15, 19, 23, 35, 62, 71, 84, 93, 100 ]
```
- Function is in a.js. It's a Insertion sort algorithm. The Time complexity is 	O(n^2). It's the best algorithm for small n. It does not have the overhead (the recursive function calls) and requires less memory then for ex QuickSort. 


-  it will take approx. (10^10)*(O(n^2)) - 36h. It depends on the input. 

```
node a.js
```

B)
- Function is in b.js. It's a QuickSort algorithm. The time complexity is O(n log n) in the best case, O(n log n) in the average case, and O(n^2) in the worst case. It is generally considered the “fastest” sorting algorithm. At the end of the day though, whatever the best sorting algorithm really is depends on the input

- It's quick (25ms).

```
node b.js
```