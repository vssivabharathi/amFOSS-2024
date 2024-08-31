package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	inputFilePath := "input.txt"
	outputFilePath := "output.txt"

	// Read the number n from input.txt
	file, err := os.Open(inputFilePath)
	if err != nil {
		fmt.Println("Error reading from input file.")
		return
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	scanner.Scan()
	n, err := strconv.Atoi(strings.TrimSpace(scanner.Text()))
	if err != nil {
		fmt.Println("Invalid number format.")
		return
	}

	// Generate the diamond pattern and write to output.txt
	outputFile, err := os.Create(outputFilePath)
	if err != nil {
		fmt.Println("Error writing to output file.")
		return
	}
	defer outputFile.Close()

	writer := bufio.NewWriter(outputFile)

	// Upper part of the diamond
	for i := 1; i <= n; i++ {
		fmt.Fprintln(writer, strings.Repeat(" ", n-i)+strings.Repeat("*", 2*i-1))
	}

	// Lower part of the diamond
	for i := n - 1; i >= 1; i-- {
		fmt.Fprintln(writer, strings.Repeat(" ", n-i)+strings.Repeat("*", 2*i-1))
	}

	writer.Flush()
	fmt.Println("Diamond pattern generated and written to output.txt.")
}

