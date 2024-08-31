#include <iostream>
#include <fstream>

int main() {
    std::string inputFilePath = "input.txt";
    std::string outputFilePath = "output.txt";
    int n;

    // Reading the number n from input.txt
    std::ifstream inputFile(inputFilePath);
    if (!inputFile) {
        std::cerr << "Error reading from input file." << std::endl;
        return 1;
    }
    inputFile >> n;
    inputFile.close();

    // Generating the diamond pattern and writing it to output.txt
    std::ofstream outputFile(outputFilePath);
    if (!outputFile) {
        std::cerr << "Error writing to output file." << std::endl;
        return 1;
    }

    // Upper part of the diamond
    for (int i = 1; i <= n; ++i) {
        outputFile << std::string(n - i, ' ') << std::string(2 * i - 1, '*') << "\n";
    }
    // Lower part of the diamond
    for (int i = n - 1; i >= 1; --i) {
        outputFile << std::string(n - i, ' ') << std::string(2 * i - 1, '*') << "\n";
    }

    outputFile.close();
    std::cout << "Diamond pattern generated and written to output.txt." << std::endl;
    return 0;
}
