defmodule FileProcessor do
  @input_file_path "input.txt"
  @output_file_path "output.txt"

  def run do
    case File.read(@input_file_path) do
      {:ok, data} ->
        case File.write(@output_file_path, data) do
          :ok ->
            case File.read(@output_file_path) do
              {:ok, output_data} ->
                IO.puts "Contents of output.txt:"
                IO.puts output_data

              {:error, reason} ->
                IO.puts "Error reading from output file."
                IO.puts reason
            end

          {:error, reason} ->
            IO.puts "Error writing to output file."
            IO.puts reason
        end

      {:error, reason} ->
        IO.puts "Error reading from input file."
        IO.puts reason
    end
  end
end


