# Notes on Data Structures and Algorithms

## Resources
### Links
```
Master the Data Strucures: https://coggle.it/diagram/W5E5tqYlrXvFJPsq/t/master-the-interview-click-here-for-course-link/c25f98c73a03f5b1107cd0e2f4bce29c9d78e31655e55cb0b785d56f0036c9d1
Master the Interview map: https://coggle.it/diagram/W5u8QkZs6r4sZM3J/t/master-the-interview
the computer memory: https://statmath.wu.ac.at/courses/data-analysis/itdtHTML/node55.html
Registers and RAM: Crash Course Computer Science: https://www.youtube.com/watch?v=fpnE6UAfbtU
List of Data Structures: https://en.wikipedia.org/wiki/List_of_data_structures
How to: Work at Google — Example Coding/Engineering Interview: https://www.youtube.com/watch?v=XKu_SEDAykw
```

## What is good code?

	1. Readable
		- Software design
			- Coupling
			- Cohesion
			- Pseudo-code
		- Design Patterns
		- Clean Code
			- KISS
			- SOLID
			- DRY
		- Infrastructure
			- Client goals
			- Tech stack
			- Resources
	2. Scalable
		1. Speed
		2. Memory
		
## Algorithm Approaching

	Greedy
	Naive
	Optimistic
	DP
	Math
	Meta Heuristic
	Nature based
	NN/ML
## Big O Rules

	1. Worst Case
	2. Remove Constants
	3. Different terms for inputs.
	4. Drop Non Dominants

## Big Os
	- O(1) Constant- no loops
	- O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
	- O(n) Linear- for loops, while loops through n items
	- O(n log(n)) Log Liniear- usually sorting operations
	- O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two
	nested loops
	- O(2^n) Exponential- recursive algorithms that solves a problem of size N
	- O(n!) Factorial- you are adding a loop for every element
	Iterating through half a collection is still O(n)
	Two separate collections: O(a * b)


## What can cause time in a function?-

	- Operations (+, -, *, /)
	- Comparisons (<, >, ==)
	- Looping (for, while)
	- Outside Function call (function())
	
	
## What causes Space complexity?-

	- Variables
	- Data Structures
	- Function Call
	- Allocations
	
	
```	
maxSubArray problem:
	Divide and conquer approach
		Dynamic Programming
			Kaenes Algorithm
				https://medium.com/@rsinghal757/kadanes-algorithm-dynamic-programming-how-and-why-does-it-work-3fd8849ed73d
```
	

## General view
### Data Structures
    - Arrays	    - Trees
    - Stacks	    - Tries
    - Queues	    - Graphs
    - Linked Lists	- Hash Tables
### Algorithms
    - Sorting
    - Dynamic Programming
    - BFS + DFS (Searching)
    - Recursion

---

### Arrays
### Cases
- #### Best Cases for use
    1. Fast Lookups
    2. Fast push/pop
    3. Ordered

- #### Worst Cases for use
    1. Slow inserts
    2. Slow deletes
    3. Fixed size*
        *(if using static array)

---

## Hash tables: Hash Tables/ Hash maps/ Maps/ Unordered maps/ Objects/  Dictionaries
  - ### The hashing process to lookup for an address to storage the value
	  - bucket.grapes = 1000 -> Hashing->direction: grapes (717->1000)
	  1. insert O(1)
	  2. lookup O(1)
	  3. delete O(1)
	  4. search O(1)
	  5. Hash Collision due to limited space of memory to allocate date in a certain address, With enough + limited space => more probable Hash Collision
	    - Theoretic collision slows down reading/writing => O(n/k) k:size of Hash table
		- Dealing with Hash collision (Collision Resolution, separate chaining, linked lists, open addressing, Robin Hood hashing)
  - ### Comparison arrays vs hash tables
		+ Arrays		+ Hash Tables
		- search O(n)		- search O(1)->O(n)
		- lookup O(1)		- insert O(1)
		- push O(1)->O(n)	- lookup O(1)->O(n)
		- insert O(n)		- delete O(1)
		- delete O(n)

### Cases
- #### Best Cases for use
    1. Fast Lookups* (Good collision resolution needed)
    2. Fast inserts
    3. Flexible keys

- #### Worst Cases for use
    1. Unordered (In some cases like Python for default hash tables are ordered)
    2. Slow key iteration

---

## Linked Lists
### Overview
  - Nodes:
    1. Head
    2. Tail
    3. null, null terminated
    ```js
    const basket = ['apples', 'grapes','pears'];
    linked list: apples->grapes->pears;

    apples
    8947 -> grapes
            8742 -> pears
                  372 -> null
    ```
  - Complexity Overview:
	- prepend O(1)
	- append O(1)
	- lookup/traversal O(n)
	- insert O(n)
	- delete O(n)

  - Pointers
	- Basically a reference to a place in memory

### Doubly Linked List
   - A reference from one to the next node and the node before, allowing us to traverse backwards and forward.

   - Complexity Overview
	- prepend O(1)
	- append O(1)
	- lookup/traversal O(n) -> O(n/2)
	- insert O(n)
	- delete O(n)

### Cases
- #### Best Cases for use
    1. Fast inserts
    2. Fast deletion
	3. Ordered
	4. Flexible size

- #### Worst Cases for use
    1. Slow lookup
    2. Requires more memory

---

## Stacks & Queues
### Stack Oveview
- LIFO Structure
- Operations:
	1. lookup O(n)
	2. pop O(1)
	3. push O(1)
	4. peek O(1)
### Misconception
- You can use both Linked lists or Arrays to implement Stacks, it really depends on the use case

### Queues Overview
- FIFO Structure
- Operacions:
	1. lookup O(n)
	2. enqueue O(1)
	3. dequeue O(1)
	4. peek O(1)

### Misconcention
- Using arrays to implement as a Queues is a bad idea, because of inefficiency, it is better Linked Lists

### Cases
- #### Best Cases for use
	1. Fast Operations
	2. Fast Peek
	3. Ordered
- #### Worst Cases for use
	1. Slow Lookup

---

## JS (Optional, more in deep about the language)
- Single threaded language that can be non-blocking
	- One call stack only
	- No Deadlocks since is just one task running
- Memory Heap
- Call Stack
- Sync and Async
	- Single thread doing async tasks or take more time
	- In order to not block the single thread it can be asynchronus with callback functions, callbacks runs in the background
- Memory Leak
- The JS Run-Time Enviroment
	- Memory heap, Call stack
	- => Wep APIs
		- DOM (Document)
		- AJAX (XMLHttpRequest)
		- Timeout (setTimeout)
	- <=> Event loop
		- Callback queue
			- onClick
			- onLoad
			- onDone

---

## Trees

### Overview
#### Perfect Tree
- The number on leafs in N level of a perfect tree = 2^N
- The total number of leafs upper the level N = Total+1
#### Types of trees
- Theres a big number of types of trees
- Binary Search Tree
	- ##### Operations:
	- Balanced
		1. lookup O(logN)
		2. insert O(logN)
		3. delete O(logN)
	- Unbalanced
		1. lookup O(N)
		2. insert O(N)
		3. delete O(N)
	- ##### Cases
		- Best Cases
		1. Better than O(n)
		2. Ordered
		3. Flexible size
		- Worst Cases
		1. No O(1) operations
- Binary Heap
	- ##### Operations:
		1. lookup O(n)
		2. insert O(logN)
		3. delete O(logN)
	- ##### Cases
		- Best Cases
			1. Better than O(n)
			2. Priority
			3. Flexible Size
			4. Fast Insert
		- Worst Cases
			1. Slow Lookup
- Priority Queue
	- ##### Operations:
		- Using arrays
			1. Enqueue O(1)
			2. Dequeue O(n)
			3. Peek O(n)
		- Using Linked List
			1. Enqueue O(n)
			2. Dequeue O(1)
			3. Peek O(1)
- Trie
	- ###### Operations:
		- lookup O(n)
		- insert O(logN)
		- delete O(logN)

---

## Graphs
### Overviews
#### Types of Graphs
- Directed / Undirected
- Weighted / Unweighted
- Cyclic / Acyclic
### Cases
- Best Cases
	1. Relationships
- Worst Cases
	2. scaling is Hard

---

## Algorithms
## - Recursion

1. Identify the base case
2. Identify the recursive case
3. Get closer and closer and return when needed. Usually you have 2 returns

- Theorem: Anything you can do with a recursion CAN be done iteratively

### Cases:
- Best suitable cases
	1. DRY
	2. Readability
- Worst suitable cases
	1. Large Stack

### When to use recursion
- Everytime you are using  a tree or converting Something into a tree, consider recursion.
	1. Divided into number of subproblems that are smaller instances of the same problem.
	2. Each instance of the subproblem is identical in nature.
	3. The solutions of each problem can be combinend to solve the problem at hand.
- Divide and conquer using recursion.