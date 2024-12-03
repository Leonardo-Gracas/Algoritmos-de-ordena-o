console.log("QUICK SORT")

function quickSort(arr, low = 0, high = arr.length - 1, pivotCriterion = "last") {
    if (low < high) {
        // Particiona a lista e obtém o índice do pivô
        const pivotIndex = partition(arr, low, high, pivotCriterion);

        // Chamada recursiva para ordenar sublistas à esquerda e à direita do pivô
        quickSort(arr, low, pivotIndex - 1, pivotCriterion);
        quickSort(arr, pivotIndex + 1, high, pivotCriterion);
    }
    return arr;
}

function partition(arr, low, high, pivotCriterion) {
    let pivotIndex;

    // Escolha do pivô com base no critério
    switch (pivotCriterion) {
        case "first":
            pivotIndex = low; // Primeiro elemento como pivô
            break;
        case "middle":
            pivotIndex = Math.floor((low + high) / 2); // Elemento do meio como pivô
            break;
        default:
            pivotIndex = high; // Último elemento como pivô
    }

    // Move o pivô para o final temporariamente
    [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]];
    const pivot = arr[high]; // Define o pivô

    let i = low - 1;
    for (let j = low; j < high; j++) {
        // Move elementos menores ou iguais ao pivô para a esquerda
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Move o pivô para sua posição final correta
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1; // Retorna a posição do pivô
}

// Testando o Quick Sort com diferentes critérios de pivô
const list1 = [8, 2, 4, 1, 3, 7, 6, 5]; // Lista desordenada
const list2 = [1, 2, 3, 4, 5, 6, 7, 8]; // Lista quase ordenada

console.log("Lista original:", list1);

// Ordenação com pivô sendo o primeiro elemento
console.log("\nOrdenando com pivô no primeiro elemento:");
console.log(quickSort([...list1], 0, list1.length - 1, "first"));

// Ordenação com pivô sendo o último elemento
console.log("\nOrdenando com pivô no último elemento:");
console.log(quickSort([...list1], 0, list1.length - 1, "last"));

// Ordenação com pivô sendo o elemento do meio
console.log("\nOrdenando com pivô no elemento do meio:");
console.log(quickSort([...list1], 0, list1.length - 1, "middle"));

console.log("\nLista quase ordenada original:", list2);

// Ordenação de lista quase ordenada
console.log("\nOrdenando lista quase ordenada com pivô no último elemento:");
console.log(quickSort([...list2], 0, list2.length - 1, "last"));

console.log("===============================================")