#include <stdio.h>

void printPattern(int rows) {
  for (int i = 0; i < rows; i++) {
    for (int j = 0; j < rows - i; j++) {
      printf(" ");
    }
    for (int k = 0; k < 2 * i + 1; k++) {
      printf("*");
    }
    printf("\n");
  }

  for (int i = rows - 2; i >= 0; i--) {
    for (int j = 0; j < rows - i; j++) {
      printf(" ");
    }
    for (int k = 0; k < 2 * i + 1; k++) {
      printf("*");
    }
    printf("\n");
  }
}

int main() {
  int rows;
  printf("Enter the number of rows: ");
  scanf("%d", &rows);
  printPattern(rows);
  return 0;
}