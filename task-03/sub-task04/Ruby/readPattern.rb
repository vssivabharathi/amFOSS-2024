input_file_path = "input.txt"
output_file_path = "output.txt"

# Read the number n from input.txt
begin
  n = File.read(input_file_path).strip.to_i
rescue
  puts "Error reading from input file or invalid number format."
  exit
end

# Generate the diamond pattern and write to output.txt
begin
  File.open(output_file_path, 'w') do |file|
    # Upper part of the diamond
    (1..n).each do |i|
      file.puts(' ' * (n - i) + '*' * (2 * i - 1))
    end

    # Lower part of the diamond
    (n - 1).downto(1) do |i|
      file.puts(' ' * (n - i) + '*' * (2 * i - 1))
    end
  end
  puts "Diamond pattern generated and written to output.txt."
rescue
  puts "Error writing to output file."
end
