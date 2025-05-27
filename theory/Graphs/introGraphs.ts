
class Graph {
    public numberOfNode: number;
    public adjacentList: {};

    constructor(){
        this.numberOfNode = 0;
        this.adjacentList = {};
    }

    addVertex(node){

    }

    addEdge(node1, node2){
        //undirected graph
    }

    showConnections(){
        const allNodes = Object.keys;
        (this.adjacentList);
        for(let node of allNodes){
            let nodeConnections = this.adjacentList[node];
            let connections = "";
            let vertex;
            for(vertex of nodeConnections){
                
            }
        }
    }

}

function main(){
    
    //* Graphs Representations
    // Edge List
    const graphEL = [[0,2],[2,3],[2,1],[1,3]];

    // Adjacent List
    const graphAL = [[2], [2,3], [0,1,3], [1,2]];

    // Adjacent Matrix
    const graphAM = {
        0: [0, 0, 1, 0],
        1: [0, 0, 1, 1],
        2: [1, 1, 0, 1],
        3: [0, 1, 1, 0]
    };

}

main();