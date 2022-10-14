#include <iostream>
using namespace std;

int length(char str[], int start) {
    int end = start;
    for(int i = start ; (str[i] != ' ')&&(str[i] != '\0') ; i++) {
        end++;
    }
    return (end-1);
}

void reverseStringWordWise(char str[]) {
    int slength = 0;
    for(int i = 0 ; str[i] != '\0' ; i++) {
        slength++;
    }
    
    int start = 0, end = 0;
    for( ; start < slength ; ) {
	    end =  length(str, start);
    
    	for(int i = 0 ; i < (end - start + 1)/2 ; i++) {
        	char temp = str[start + i];
        	str[start + i] = str[end - i];
        	str[end - i] = temp;
    	}
    
    	end+=2;
    	start = end;
    }
}

int main() {
    char input[1000];
    cin.getline(input, 1000);
    reverseStringWordWise(input);
    cout << input << endl;
    return 0;
}