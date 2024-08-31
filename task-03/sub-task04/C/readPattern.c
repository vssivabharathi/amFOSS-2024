#include <stdio.h>
#include <stdlib.h>

int main() {
    FILE *inputFile, *outputFile;
    char inputFilePath[] = "input.txt";
    char outputFilePath[] = "output.txt";
    int n;

    // Reading the number n from input.txt
    inputFile = fopen(inputFilePath, "r");
    if (inputFile == NULL) {
        perror("Error opening input file");
        return 1;
    }
    fscanf(inputFile, "%d", &n);
    fclose(inputFile);

    // Generating the diamond pattern and writing it to output.txt
    outputFile = fopen(outputFilePath, "w");
    if (outputFile == NULL) {
        perror("Error opening output file");
        return 1;
    }

    // Upper part of the diamond
    for (int i = 1; i <= n; i++) {
        for (int j = n; j > i; j--) {
            fputc(' ', outputFile);
        }
        for (int k = 1; k <= (2 * i - 1); k++) {
            fputc('*', outputFile);
        }
        fputc('\n', outputFile);
    }

    // Lower part of the diamond
    for (int i = n - 1; i >= 1; i--) {
        for (int j = n; j > i; j--) {
            fputc(' ', outputFile);
        }
        for (int k = 1; k <= (2 * i - 1); k++) {
            fputc('*', outputFile);
        }
        fputc('\n', outputFile);
    }

    fclose(outputFile);
    printf("Diamond pattern generated and written to output.txt.\n");
    return 0;
}
