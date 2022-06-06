const arr = [1, 200, 4, 6, 2, 8, 7];    

 const qsort = (arr) => {
    if (arr.length < 2) {
        return arr;
}    

 else {
    const pivotPosition = Math.floor(Math.random() * arr.length);
    const pivot = arr[pivotPosition];

const less = arr.filter((value, index) => {
    const isPivot = index === pivotPosition;
    return !isPivot && (value <= pivot);
});

 
const more = arr.filter(value => value > pivot);

    return [...qsort(less), pivot, ...qsort(more)];

}};    
console.log(qsort(arr));
 
