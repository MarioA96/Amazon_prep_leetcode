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