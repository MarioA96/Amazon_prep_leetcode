function countGroups(related) {
    // Write your code here

    //For a given matrix we need to find the related ones in a neighborhood
    // Strong related and weak related
    // neighborhood of max distance 1 in each direction
    
    //First we passed related to a matrix of matrix to compare elements in a neighborhood
    // We can assume the proble to be a graph for finding nearest neighborhood
    
    
    const len = related.length;
    let numNeighbors = 0;
    
    for (let i=0; i<len; i++) {
        for (let j=i + 1; j < len; j++) {
            if (related[i][j] === '1') {
                numNeighbors++;
            }
        }
    }
    return numNeighbors;
    
}

// Example
// Input: 
// 5

// 10000
// 01000
// 00100
// 00010
// 00001

// Output:
// 0