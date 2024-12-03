console.log("INTERPOLATION SEARCH");

function interpolationSearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    let probes = 0;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        probes++;
        // Calcula a posição estimada usando a interpolação linear
        let pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

        if (arr[pos] === target) {
            console.log("Probes feitos (Interpolation Search): ", probes);
            return pos;
        }

        if (arr[pos] < target) {
            low = pos + 1; // Ajusta a busca para o lado direito
        } else {
            high = pos - 1; // Ajusta a busca para o lado esquerdo
        }
    }

    console.log("Probes feitos (Interpolation Search): ", probes);
    return -1; // Retorna -1 se não encontrar o elemento
}

{
    console.log("\nTeste em lista com intervalos uniformes:");
    let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    let target = 70;

    console.log("Array: ", array);
    console.log("Alvo: ", target);

    let indexInterpolation = interpolationSearch(array, target);
    console.log("Índice encontrado (Interpolation Search): ", indexInterpolation);

    console.log("\nNota: O Interpolation Search pode realizar menos 'probes' que o Binary Search neste cenário.");
}

{
    console.log("\nTeste em lista com intervalos não uniformes:");
    let array = [1, 3, 5, 8, 15, 29, 50, 80, 130, 210];
    let target = 29;

    console.log("Array: ", array);
    console.log("Alvo: ", target);

    let indexInterpolation = interpolationSearch(array, target);
    console.log("Índice encontrado (Interpolation Search): ", indexInterpolation);

    console.log("\nNota: O Binary Search geralmente será mais eficiente em listas com intervalos não uniformes.");
}

{
    console.log("\nTeste com valor não existente:");
    let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    let target = 75;

    console.log("Array: ", array);
    console.log("Alvo: ", target);

    let indexInterpolation = interpolationSearch(array, target);
    console.log("Índice encontrado (Interpolation Search): ", indexInterpolation);

    console.log("\nNota: Ambos os métodos têm desempenho semelhante quando o valor não está presente.");
}


// Observação sobre os casos
console.log("Diferença principal entre Interpolation Search e Binary Search:");
console.log("1. Interpolation Search é mais eficiente em listas grandes e uniformemente distribuídas.");
console.log("2. Binary Search é robusto e funciona bem em qualquer lista ordenada.");

console.log("===============================================")