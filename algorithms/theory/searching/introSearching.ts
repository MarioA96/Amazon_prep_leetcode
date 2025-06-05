
function main(){

    let beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

    //Linear Search
    beasts.indexOf('Godzilla'); // Returns the index

    beasts.findIndex( (item)=> { // Returns the index
        return item === 'Godzilla'
    });

    beasts.find( (item)=> { // Returns the actual 'Godzilla'
        return item === 'Godzilla'
    });

    beasts.includes('Godzilla'); // Returns boolean if it exists or not in "beasts"



    // Binary Search
    // If it's sorted we can do better than O(n)



    // Graph + Tree traversals (visiting every single node O(n))
    // Breadth First Search/Traversal
    //              9
    //      4           20
    //  1       6   15      170
    // [9, 4, 20, 1, 6, 15, 170]
    // Depth First Search
    //              9
    //      4           20
    //  1       6   15      170
    // [9, 4, 1, 6, 20, 15, 170]
}


main();