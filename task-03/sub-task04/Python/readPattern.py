input_file_path = "input.txt"
output_file_path = "output.txt"

# Read the number n from input.txt
try:
    with open(input_file_path, 'r') as input_file:
        n = int(input_file.readline().strip())
except (IOError, ValueError) as e:
    print("Error reading from input file or invalid number format.")
    exit(1)

# Generate the diamond pattern and write to output.txt
try:
    with open(output_file_path, 'w') as output_file:
        # Upper part of the diamond
        for i in range(1, n + 1):
            output_file.write(' ' * (n - i) + '*' * (2 * i - 1) + '\n')

        # Lower part of the diamond
        for i in range(n - 1, 0, -1):
            output_file.write(' ' * (n - i) + '*' * (2 * i - 1) + '\n')
    
    print("Diamond pattern generated and written to output.txt.")
except IOError as e:
    print("Error writing to output file.")
