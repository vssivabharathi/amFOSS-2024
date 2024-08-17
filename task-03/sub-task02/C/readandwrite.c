#include <stdio.h>
#include <stdlib.h>

int main()
{
    FILE *inputFile = fopen("input.txt", "r");
    if (inputFile == NULL)
    {
        printf("Input file not found.\n");
        return 1;
    }

    char inputString[100];
    fgets(inputString, 100, inputFile);
    fclose(inputFile);

    FILE *outputFile = fopen("output.txt", "w");
    if (outputFile == NULL)
    {
        printf("Error writing to output file.\n");
        return 1;
    }

    fputs(inputString, outputFile);
    fclose(outputFile);

    outputFile = fopen("output.txt", "r");
    char outputContent[100];
    fgets(outputContent, 100, outputFile);
    fclose(outputFile);

    printf("Contents of output.txt:\n%s", outputContent);

    return 0;
}
