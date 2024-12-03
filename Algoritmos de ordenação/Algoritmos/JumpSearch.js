console.log("JUMP SEARCH");

function jumpSearch(arr, target) {
    const n = arr.length;
    const step = Math.floor(Math.sqrt(n)); // Tamanho ideal do salto
    console.log("Tamanho da lista: ", n)
    console.log("Tamanho do pulo: ", step)
    let prev = 0;
    let probes = 0;

    // Salta pela lista enquanto o elemento no final do bloco é menor que o alvo
    while (prev < n && arr[Math.min(step + prev, n) - 1] < target) {
        probes++;
        prev += step;
        if (prev >= n) {
            console.log("Probes feitos (Jump Search): ", probes);
            return -1; // Alvo não encontrado
        }
    }

    // Busca linear dentro do bloco
    let current = prev; // Marca o início do bloco
    while (current < Math.min(prev + step, n)) {
        probes++;
        if (arr[current] === target) {
            console.log("Probes feitos (Jump Search): ", probes);
            return current; // Alvo encontrado
        }
        current++;
    }

    console.log("Probes feitos (Jump Search): ", probes);
    return -1; // Alvo não encontrado
}

// Casos de teste
{
    console.log("\nTeste com lista de tamanho pequeno:");
    let array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    let target = 19;

    console.log("Array: ", array);
    console.log("Alvo: ", target);

    let indexJump = jumpSearch(array, target);
    console.log("Índice encontrado (Jump Search): ", indexJump);
}

{
    console.log("\nTeste com lista maior:");
    let array = Array.from({ length: 1000 }, (_, i) => i + 1); // Array de 1 a 1000
    let target = 725;

    console.log("Tamanho da lista: ", array.length);
    console.log("Alvo: ", target);

    let indexJump = jumpSearch(array, target);
    console.log("Índice encontrado (Jump Search): ", indexJump);
}

console.log("\n\nDiferenças entre Jump Search e Binary Search:");
console.log("1. Jump Search tem complexidade O(√n), enquanto Binary Search é O(log n).");
console.log("2. Jump Search realiza busca linear em blocos, Binary Search divide a lista ao meio.");
console.log("3. Jump Search é melhor para acesso sequencial; Binary Search, para acesso aleatório.");

console.log("===============================================")