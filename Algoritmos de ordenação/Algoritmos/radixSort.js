console.log("RADIX SORT")

function countingSortByDigit(arr, exp, base) {
    const n = arr.length;
    const output = Array(n).fill(0);
    const count = Array(base).fill(0);

    // Contar a frequência dos dígitos em relação ao dígito atual (exp)
    for (let i = 0; i < n; i++) {
        const digit = Math.floor(arr[i] / exp) % base;
        count[digit]++;
    }

    // Atualizar o count para conter os índices reais de cada dígito
    for (let i = 1; i < base; i++) {
        count[i] += count[i - 1];
    }

    // Construir o array de saída
    for (let i = n - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % base;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    // Copiar o array ordenado para o original
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

function radixSort(arr, base = 10) {
    // Encontrar o maior número para determinar o número de dígitos necessários
    const max = Math.max(...arr);
    let exp = 1; // Unidade inicial

    // Ordenar por cada dígito (da unidade para a posição mais significativa)
    while (Math.floor(max / exp) > 0) {
        countingSortByDigit(arr, exp, base); // Classificar os números pelo dígito atual
        console.log(`Após ordenar com exp = ${exp}, base = ${base}:`, arr);
        exp *= base; // Passar para o próximo dígito
    }

    return arr;
}

// Testando com números inteiros de diferentes tamanhos
{
    const nums1 = [170, 45, 75, 90, 802, 24, 2, 66]; // Números com até 3 dígitos
    const nums2 = [12345, 67890, 54321, 98765, 11111]; // Números com até 5 dígitos
    console.log("Array original (base 10):", nums1);
    radixSort(nums1);
    console.log("Ordenado (base 10):", nums1);

    console.log("\nArray original (base 10):", nums2);
    radixSort(nums2);
    console.log("Ordenado (base 10):", nums2);
}


function radixSortBinary(arr) {
    // Encontrar o maior número para determinar o número de bits necessários
    const max = Math.max(...arr);
    let exp = 1; // Unidade inicial (equivalente a 2^0 para o primeiro bit)

    // Ordenar bit a bit, considerando apenas dois valores: 0 e 1
    while (Math.floor(max / exp) > 0) {
        countingSortByDigit(arr, exp, 2); // Classificar os números pelo bit atual
        console.log(`Após ordenar com exp = ${exp}, base = 2 (bit):`, arr);
        exp *= 2; // Passar para o próximo bit
    }

    return arr;
}

// Testando com base binária
{
    const nums3 = [3, 7, 2, 8, 1, 5, 10]; // Números inteiros pequenos
    console.log("\nArray original (base 2):", nums3);
    radixSortBinary(nums3);
    console.log("Ordenado (Base 2):", nums3);
}


console.log("===============================================")