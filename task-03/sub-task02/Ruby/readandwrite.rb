
input_file_path = 'input.txt'
output_file_path = 'output.txt'

begin
  #Reading 
  data = File.read(input_file_path)
  
  # Writing 
  File.write(output_file_path, data)

  # Reading from the output file and printing
  output_data = File.read(output_file_path)
  puts 'Contents of output.txt'
  puts output_data

rescue Errno::ENOENT => e
  # Handle file not found errors
  puts 'Error Input '
  puts e.message
rescue IOError => e
  # Handle other I/O errors
  puts 'Error  I/O '
  puts e.message
end
