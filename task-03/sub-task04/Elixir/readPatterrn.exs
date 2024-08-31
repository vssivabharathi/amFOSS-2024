defmodule DiamondPattern do
  def main do
    input_file_path = "input.txt"
    output_file_path = "output.txt"

    # Read the number n from input.txt
    case File.read(input_file_path) do
      {:ok, contents} ->
        n = String.trim(contents) |> String.to_integer()

        # Generate the diamond pattern
        pattern = generate_pattern(n)

        # Write to output.txt
        File.write!(output_file_path, pattern)
        IO.puts("Diamond pattern generated and written to output.txt.")
      
      {:error, _reason} ->
        IO.puts("Error reading from input file.")
    end
  end

  defp generate_pattern(n) do
    upper = for i <- 1..n, do: String.duplicate(" ", n - i) <> String.duplicate("*", 2 * i - 1)
    lower = for i <- (n-1)..1, do: String.duplicate(" ", n - i) <> String.duplicate("*", 2 * i - 1)
    (upper ++ lower) |> Enum.join("\n") <> "\n"
  end
end

DiamondPattern.main()
