console.log("SELECTION SORT")

function selectionSort(arr) {
    const n = arr.length;

    console.log("Estado inicial:", arr);

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        // Encontra o índice do menor elemento no restante da lista
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Troca o menor elemento com o primeiro elemento da sublista
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }

        // Exibe o estado atual da lista após cada iteração
        console.log(`Iteração ${i + 1}:`, arr);
    }

    console.log("Lista final ordenada:", arr);
    return arr;
}

// Teste com uma lista
{
    let nums = [64, 25, 12, 22, 11];
    selectionSort(nums);
}

console.log("===============================================")