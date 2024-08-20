#include <iostream>
#include <fstream>
#include <string>

int main()
{
    std::ifstream inputFile("input.txt");
    if (!inputFile.is_open())
    {
        std::cout << "Input file not found." << std::endl;
        return 1;
    }

    std::string inputString;
    std::getline(inputFile, inputString);
    inputFile.close();

    std::ofstream outputFile("output.txt");
    if (!outputFile.is_open())
    {
        std::cout << "Error writing to output file." << std::endl;
        return 1;
    }

    outputFile << inputString;
    outputFile.close();

    std::ifstream outputReader("output.txt");
    std::string outputContent;
    std::getline(outputReader, outputContent);
    outputReader.close();

    std::cout << "Contents of output.txt:\n"
              << outputContent << std::endl;

    return 0;
}
