#include <iostream>
using namespace std;

void removeAllOccurrencesOfChar(char str[], char c) {
    int nextIndex = 0;
    int i = 0;
    for( ; str[i]!='\0' ; i++) {
        if(str[i] != c) {
            str[nextIndex] = str[i];
            nextIndex++;
        }
    }
    str[nextIndex] = '\0';
}

int main() {
    char str[100], c;
    cin >> str;
    cin >> c;
    removeAllOccurrencesOfChar(str, c);
    cout << str;
    return 0;
}