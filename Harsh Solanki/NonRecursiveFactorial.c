#include <stdio.h>
#include <conio.h>
#include <math.h>
#include <stdlib.h>


int rfactorial(int n)
{
	if(n == 0 || n==1)
		return 1;
	else
		return n * rfactorial(n - 1);
}

int main(int argc, char **argv)
{
	int n;
	printf("Enter a positive number: ");
	scanf("%d", &n);
	printf("\n");
	printf("Recursive solution: %d! = %d", n, rfactorial(n));
    getch();
    return 0;
}