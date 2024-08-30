#include <iostream>

using namespace std;

void printPattern(int rows) {
  for (int i = 0; i < rows; i++) {
    for (int j = 0; j < rows - i; j++) {
      cout << " ";
    }
    for (int k = 0; k < 2 * i + 1; k++) {
      cout << "*";
    }
    cout << endl;
  }

  for (int i = rows - 2; i >= 0; i--) {
    for (int j = 0; j < rows - i; j++) {
      cout << " ";
    }
    for (int k = 0; k < 2 * i + 1; k++) {
      cout << "*";
    }
    cout << endl;
  }
}

int main() {
  int rows = 3;
  printPattern(rows);
  return 0;
}