import os

try:
    with open('input.txt', 'r') as input_file:
        input_string = input_file.read()

    with open('output.txt', 'w') as output_file:
        output_file.write(input_string)

  
    with open('output.txt', 'r') as output_file:
        output_content = output_file.read()
        print("Contents of output.txt:\n", output_content)

except FileNotFoundError:
    print("Input file not found.")
except IOError:
    print("Error writing to output file.")
