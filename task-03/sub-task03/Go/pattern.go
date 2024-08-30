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
    var rows int
    fmt.Print("Enter the number of rows: ")
    fmt.Scan(&rows)
    printPattern(rows)
}