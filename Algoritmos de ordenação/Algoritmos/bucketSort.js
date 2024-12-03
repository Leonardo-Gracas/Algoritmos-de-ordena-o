console.log("BUCKET SORT")

function bucketSortIntegers(arr, bucketSize = 5) {
    if (arr.length <= 1) return arr;

    // Encontrar o valor máximo e mínimo no array
    const minVal = Math.min(...arr);
    const maxVal = Math.max(...arr);

    // Determinar o número de baldes
    const bucketCount = Math.floor((maxVal - minVal) / bucketSize) + 1;
    const buckets = Array.from({ length: bucketCount }, () => []);

    // Distribuir os números nos baldes
    arr.forEach(num => {
        const bucketIndex = Math.floor((num - minVal) / bucketSize);
        buckets[bucketIndex].push(num);
    });

    console.log("Baldes preenchidos (inteiros):", buckets);

    // Ordenar cada balde e concatenar os resultados
    return buckets.reduce((sortedArray, bucket) => {
        return sortedArray.concat(bucket.sort((a, b) => a - b));
    }, []);
}

// Teste com números inteiros
const intNums = [42, 32, 73, 23, 64, 89, 12, 9, 37];
console.log("Array original (inteiros):", intNums);
console.log("Array ordenado (Bucket Sort):", bucketSortIntegers(intNums));

console.log("===============================================")