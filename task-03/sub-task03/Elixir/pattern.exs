defmodule Pattern do
  def print(rows) do
    for i <- 0..rows - 1 do
      for j <- 0..rows - i - 1 do
        IO.write(" ")
      end
      for k <- 0..2 * i do
        IO.write("*")
      end
      IO.puts("")
    end

    for i <- rows - 2 downto 0 do
      for j <- 0..rows - i - 1 do
        IO.write(" ")
      end
      for k <- 0..2 * i do
        IO.write("*")
      end
      IO.puts("")
    end
  end
end

IO.puts("Enter the number of rows:")
rows = String.to_integer(IO.gets())
Pattern.print(rows)