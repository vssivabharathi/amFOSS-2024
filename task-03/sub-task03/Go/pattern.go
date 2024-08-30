package main

import "fmt"

func printPattern(rows int) {
    for i := 0; i < rows; i++ {
        for j := 0; j < rows-i; j++ {
            fmt.Print(" ")
        }
        for k := 0; k < 2*i+1; k++ {
            fmt.Print("*")
        }
        fmt.Println()
    }

    for i := rows - 2; i >= 0; i-- {
        for j := 0; j < rows-i; j++ {
            fmt.Print(" ")
        }
        for k := 0; k < 2*i+1; k++ {
            fmt.Print("*")
        }
        fmt.Println()
    }
}

func main() {
    rows := 3
    printPattern(rows)
}