// Write a program to get random Number between min and max //

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{

    int min,max,count;
    
    printf("Enter the min number: ");
    scanf("%d",&min);
    
    printf("Enter the max number: ");
    scanf("%d",&max);

    printf("Enter how many random number you want: ");
    scanf("%d",&count);

    srand(time(0));

    printf("The random numbers are: ");
    for (int i = 0; i < count; i++) {
        int num = (rand() % (max - min + 1)) + min;
        printf("%d ", num);
    }

    return 0;
}
