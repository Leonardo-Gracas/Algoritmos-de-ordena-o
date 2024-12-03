console.log("MERGE SORT")

// Função de mesclagem
function merge(left, right) {
    let result = [];
    let leftIndex = 0, rightIndex = 0;

    // Mescla as duas sublistas em ordem crescente
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex++]);
        } else {
            result.push(right[rightIndex++]);
        }
    }

    // Adiciona os elementos restantes
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Função Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Caso base: lista já ordenada

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)); // Divide o lado esquerdo
    const right = mergeSort(arr.slice(mid));  // Divide o lado direito

    return merge(left, right); // Conquista ao mesclar
}

// Testando com números inteiros
{
    let nums = [8, 3, 5, 1, 9, 6, 7, 2, 4];
    console.log("Array original:", nums);
    console.log("Array ordenado (Merge Sort):", mergeSort(nums));
}



// Função de mesclagem para strings
function mergeStrings(left, right) {
    let result = [];
    let leftIndex = 0, rightIndex = 0;

    // Mescla strings com base na ordem alfabética
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex].localeCompare(right[rightIndex]) < 0) {
            result.push(left[leftIndex++]);
        } else {
            result.push(right[rightIndex++]);
        }
    }

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Função Merge Sort para strings
function mergeSortStrings(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSortStrings(arr.slice(0, mid)); // Divide o lado esquerdo
    const right = mergeSortStrings(arr.slice(mid));  // Divide o lado direito

    return mergeStrings(left, right); // Conquista ao mesclar
}

// Testando com strings
{
    let strings = ["maçã", "laranja", "banana", "uva", "abacaxi", "abacate"];
    console.log("Array de strings original:", strings);
    console.log("Array de strings ordenado (Merge Sort):", mergeSortStrings(strings));
}

console.log("===============================================")