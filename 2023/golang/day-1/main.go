package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
	"time"
)

func main() {
	file, err := os.ReadFile("./input.txt")
	if err != nil {
		fmt.Println(err)
		os.Exit(1)
	}

	fmt.Println(Part1(string(file)))
	fmt.Println(Part2(string(file)))
}

func Part1(input string) int {
	reader := strings.NewReader(input)
	scanner := bufio.NewScanner(reader)

	sum := 0
	for scanner.Scan() {
		line := scanner.Text()

		var first, last int

		for i := 0; i < len(line); i++ {
			parsed, ok := parsedDigit1(line[i])
			if ok {
				first = parsed
				break
			}
		}
		for i := len(line) - 1; i >= 0; i-- {
			parsed, ok := parsedDigit1(line[i])
			if ok {
				last = parsed
				break
			}
		}
		fmt.Printf("the digits are %d, %d \n", first, last)
		time.Sleep(5 * time.Millisecond)
		sum += first*10 + last

	}
	return sum
}

func parsedDigit1(b byte) (int, bool) {
	if b >= '0' && b <= '9' {
		return int(b - '0'), true
	} else {
		return 0, false
	}
}

var digits = [...]string{
	"one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
}

func Part2(input string) int {
	return -1
}
