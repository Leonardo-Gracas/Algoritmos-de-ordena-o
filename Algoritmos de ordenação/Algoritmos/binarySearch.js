console.log("BINARY SEARCH")

function binarySearch(arr, target) {
    let min = 0
    let max = arr.length - 1
    let cortes = -1

    while (min <= max) {
        // Corta a lista pela metade sempre que não encontrar o elemento
        /* 
            Se o elemento for maior que o alvo, ignora a parte maior que o alvo
            e se for menor, ignora a parte menor
        */
        cortes++
        let mid = Math.floor((min + max) / 2)

        if (arr[mid] == target) {
            console.log("Cortes feitos: ", cortes)
            return mid
        } else if (arr[mid] < target) {
            min = mid + 1
        } else {
            max = mid - 1
        }
    }

    // Retorna -1 caso não encontre
    return -1
}

{
    let array = [1, 2, 4, 5, 6, 7, 9, 10, 13, 16]
    let target = 9
    console.log("Array: ", array)
    console.log("Alvo: ", target)

    let index = binarySearch(array, target)
    console.log("Indice: ", index)
}

{
    console.log("O array precisa estar ordenado para que a divisão de maior ou menor funcione.\n\nExemplo:")
    let array = [9, 1, 6, 2, 3, 88, 32]
    let target = 6
    console.log("Array: ", array)
    console.log("Alvo: ", target)

    let index = binarySearch(array, target)
    console.log("Indice: ", index)
    console.log("O item, mesmo presente, não foi encontrado.")
}

/// EXERCÍCIO ISBN

{
    console.log("EXERCÍCIO ISBN")
    // Lista de livros da biblioteca (ordenada por ISBN)
    function binarySearchByISBN(library, targetISBN) {
        let min = 0;
        let max = library.length - 1;

        while (min <= max) {
            let mid = Math.floor((min + max) / 2);

            if (library[mid].ISBN === targetISBN) {
                return mid; 
            } else if (library[mid].ISBN < targetISBN) {
                min = mid + 1; 
            } else {
                max = mid - 1; 
            }
        }

        return -1;
    }

    // Teste
    let library = [
        { title: "Book A", ISBN: 1111 },
        { title: "Book B", ISBN: 2222 },
        { title: "Book C", ISBN: 3333 },
        { title: "Book D", ISBN: 4444 },
        { title: "Book E", ISBN: 5555 },
        { title: "Book F", ISBN: 6666 }
    ];

    // Exemplo de ISBN a ser procurado
    let targetISBN = 3333;

    // Realizando a busca binária
    let index = binarySearchByISBN(library, targetISBN);

    if (index !== -1) {
        console.log(`Livro encontrado: ${library[index].title}, ISBN: ${library[index].ISBN}`);
    } else {
        console.log("Livro não encontrado na biblioteca.");
    }
}

console.log("===============================================")