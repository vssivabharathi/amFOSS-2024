package main

import (
	"fmt"
	"io/ioutil"
)

func main() {
	// Read from input file
	inputContent, err := ioutil.ReadFile("input.txt")
	if err != nil {
		fmt.Println("Error reading input file:", err)
		return
	}

	// Create and write to output file
	err = ioutil.WriteFile("output.txt", inputContent, 0644)
	if err != nil {
		fmt.Println("Error writing to output file:", err)
		return
	}

	// Read from output file to verify
	outputContent, err := ioutil.ReadFile("output.txt")
	if err != nil {
		fmt.Println("Error reading output file:", err)
		return
	}

	// Display the contents of the output file
	fmt.Println("Contents of output.txt:")
	fmt.Println(string(outputContent))
}
