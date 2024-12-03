console.log("EXPONENTIAL SEARCH")

function exponentialSearch(arr, target) {
    const n = arr.length;

    if (n === 0) return -1;

    let bound = 1;
    console.log("1. O algoritmo começa verificando blocos exponenciais: 1, 2, 4, 8...");

    // Localiza o intervalo exponencialmente
    while (bound < n && arr[bound] < target) {
        console.log(`Verificando índice ${bound}: valor ${arr[bound]}`);
        bound *= 2;
    }

    // Define os limites do intervalo
    const low = Math.floor(bound / 2);
    const high = Math.min(bound, n);
    console.log(`2. Alvo pode estar entre os índices ${low} e ${high - 1}. Aplicando Binary Search nesse intervalo.`);

    // Aplica busca binária no intervalo determinado
    return binarySearch(arr, target, low, high);
}

// Busca Binária em um intervalo específico
function binarySearch(arr, target, low, high) {
    while (low < high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) low = mid + 1;
        else high = mid;
    }

    return -1;
}

// Testes
{
    let array = Array.from({ length: 1000 }, (_, i) => i + 1); // Array de 1 a 1000
    let target = 725;

    console.log("\nTeste com lista de tamanho médio:");
    console.log("Array: [1, 2, 3, ..., 1000]");
    console.log("Alvo: ", target);

    const index = exponentialSearch(array, target);
    console.log("Índice encontrado (Exponential Search): ", index);
}

{
    let array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    let target = 15;

    console.log("\nTeste com lista pequena:");
    console.log("Array: ", array);
    console.log("Alvo: ", target);

    const index = exponentialSearch(array, target);
    console.log("Índice encontrado (Exponential Search): ", index);
}

// Explicação em Console
console.log("\nDiferenças e Combinação de Estratégias:");
console.log("1. Exponential Search combina blocos crescentes (Jump Search) e busca refinada (Binary Search).");
console.log("2. Complexidade: O(log n) devido ao Binary Search no intervalo pequeno.");
console.log("3. Melhor para listas muito grandes, mas similar ao Binary Search em listas pequenas.");

console.log("===============================================")