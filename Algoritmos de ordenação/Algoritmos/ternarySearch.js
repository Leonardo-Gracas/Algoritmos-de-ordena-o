console.log("TERNARY SEARCH")

/**
 * Implementação do Ternary Search para localizar um elemento em uma lista ordenada.
 * Esse algoritmo divide a lista em três partes, verificando duas divisões a cada iteração.
 */
function ternarySearch(arr, target, low = 0, high = arr.length - 1) {
    let probes = 0; // Contador para acompanhar o número de verificações realizadas

    while (low <= high) {
        probes++;

        // Divisões: dois pontos dividindo a lista em três partes
        const mid1 = low + Math.floor((high - low) / 3);
        const mid2 = high - Math.floor((high - low) / 3);

        // Verifica os dois pontos de divisão
        if (arr[mid1] === target) {
            console.log("Probes feitos (Ternary Search):", probes);
            return mid1;
        }
        if (arr[mid2] === target) {
            console.log("Probes feitos (Ternary Search):", probes);
            return mid2;
        }

        // Decide qual segmento continuar
        if (target < arr[mid1]) {
            high = mid1 - 1; // Busca na primeira parte
        } else if (target > arr[mid2]) {
            low = mid2 + 1; // Busca na terceira parte
        } else {
            low = mid1 + 1; // Busca na segunda parte
            high = mid2 - 1;
        }
    }

    console.log("Probes feitos (Ternary Search):", probes);
    return -1; // Elemento não encontrado
}

// Testando o Ternary Search em diferentes listas
{
    const sortedList = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

    console.log("Lista ordenada:", sortedList);

    const target1 = 7;
    console.log("\nProcurando elemento presente (7):");
    console.log("Índice encontrado:", ternarySearch(sortedList, target1));

    const target2 = 20;
    console.log("\nProcurando elemento ausente (20):");
    console.log("Índice encontrado:", ternarySearch(sortedList, target2));
}

console.log("===============================================")