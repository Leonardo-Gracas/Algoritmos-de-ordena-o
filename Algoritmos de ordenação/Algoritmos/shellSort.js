console.log("ORDENAÇÃO\n\n\n")

console.log("SHELL SORT")

function shellSort(arr, gapSequence) {
    const n = arr.length;
    let probes = 0;

    // Processo de ordenação com a sequência de intervalos fornecida
    for (let gap of gapSequence) {
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j = i;
            probes++;
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
                probes++;
            }
            arr[j] = temp;
        }
    }

    console.log("Probes feitos (Shell Sort): ", probes);
    return arr;
}

// Sequências de intervalos
function shellSequence(n) {
    const gaps = [];
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        gaps.push(gap);
    }
    return gaps;
}

function knuthSequence(n) {
    const gaps = [];
    let gap = 1;
    while (gap < n) {
        gaps.push(gap);
        gap = 3 * gap + 1;
    }
    return gaps.reverse();
}

function hibbardSequence(n) {
    const gaps = [];
    let gap = 1;
    while (gap < n) {
        gaps.push(gap);
        gap = 2 * gap + 1;
    }
    return gaps.reverse();
}

// Função de teste para a execução com diferentes sequências de intervalo
function testShellSort(arr) {
    console.log("\nTeste com Shell Sort (Sequência Shell):");
    let array = [...arr]; // Cópia do array original
    console.log("Array original:", array);
    shellSort(array, shellSequence(array.length));
    console.log("Array ordenado (Shell Sequence):", array);

    console.log("\nTeste com Shell Sort (Sequência Knuth):");
    array = [...arr];
    console.log("Array original:", array);
    shellSort(array, knuthSequence(array.length));
    console.log("Array ordenado (Knuth Sequence):", array);

    console.log("\nTeste com Shell Sort (Sequência Hibbard):");
    array = [...arr]; 
    console.log("Array original:", array);
    shellSort(array, hibbardSequence(array.length));
    console.log("Array ordenado (Hibbard Sequence):", array);
}

// Testes
let array = [5, 2, 9, 1, 5, 6, 3, 7, 8, 4];
testShellSort(array);

// Explicações sobre as sequências
console.log("\nDiferenças nas Sequências de Intervalos:");
console.log("1. A sequência de Shell (intervalos reduzidos pela metade) é simples, mas não tão eficiente.");
console.log("2. A sequência de Knuth (intervalos: 1, 4, 13, ...) é mais eficiente que a sequência de Shell, reduzindo o número de comparações.");
console.log("3. A sequência de Hibbard (1, 3, 7, ...) tende a ser mais eficiente para grandes listas.");

console.log("===============================================")