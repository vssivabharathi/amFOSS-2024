def print_pattern(rows)
  for i in 0..rows-1
    for j in 0..rows-i-1
      print " "
    end
    for k in 0..2*i
      print "*"
    end
    puts
  end

  for i in (rows-2).downto(0)
    for j in 0..rows-i-1
      print " "
    end
    for k in 0..2*i
      print "*"
    end
    puts
  end
end

puts "Enter the number of rows:"
rows = gets.to_i
print_pattern(rows)