function intro(){
    let user = {
        age: 54,
        name: 'Kyle',
        magic: true,
        scream: function(){
            console.log('Screaming*');
        }
    }

    user.age; //* O(1)
    user.spell = 'An spell'; //* O(1)
    user.scream(); //* O(1)

    //! Objects -> map: Only allows you to string as a key, stringfy*
    
    const mapA = new Map();//* Any data type as a key
                           //* Keeps an insercion order
    
    const setA = new Set();//* Only stores the keys, not the values
}

function main(){

    class HashTable {
        public size: number;
        public data: any;
        
        constructor(size: number){
            this.data = new Array(size);
        }

        _hash(key: string){
            let hash = 0;
            for (let index = 0; index < key.length; index++) {
                hash = (hash + key.charCodeAt(index) * index) % this.data.length;
            }

            return hash;
        } //* O(1)

        set(key: string, value: number){
            let address = this._hash(key);
            //We make sure theres no collision on that address
            if(!this.data[address]) {
                this.data[address] = [];
            }
            //In any case we should push in the same address an array inside
            // So is an array of arrays containing key-values
            this.data[address].push([key, value]);

            return this.data;
        } //* O(1)

        get(key: string){
            let address = this._hash(key);
            const currentBucket = this.data[address];
            
            if(currentBucket){
                for(let i=0; i<currentBucket.length; i++)
                {
                    if(currentBucket[i][0] === key){
                        return currentBucket[i][1];
                    }
                }
            }

            return undefined;
        }//* O(1)->O(n)

        keys(){
            const keysArray: any[] = [];
            // Downside of hashtables of retreiving data is 
            // looping throught the whole data
            for(let i=0; i<this.data.length; i++){
                if(this.data[i]){
                    keysArray.push(this.data[i][0][0]);
                }
            }

            return keysArray;
        }

    }


    const myHashTable = new HashTable(50);
    myHashTable.set('grapes', 10000);
    myHashTable.set('tuna', 100);
    myHashTable.set('oranges', 50);

    console.log(myHashTable.get('grapes'));
    console.log(myHashTable.get('tuna'));
    console.log(myHashTable.get('oranges'));

    console.log(myHashTable.keys());
}

main();