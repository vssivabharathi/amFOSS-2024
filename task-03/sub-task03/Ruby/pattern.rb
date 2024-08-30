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
  
  rows = 3
  print_pattern(rows)