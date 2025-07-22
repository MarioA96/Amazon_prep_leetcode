#include <stdio.h>


typedef struct {
    int value;
    int* next;

} Node;

typedef struct {
    int data;
    void (*action)(int);
    
} LinkedList;

void constructor(int value){
    printf("Value: %d\n", value);
}

int main(int argc, char* argv[]){

    LinkedList list;
    
    list.data = 32;
    //Instance of function
    list.action = constructor;
    //Calling the function through the pointer
    list.action( list.data );

    return 0;
}