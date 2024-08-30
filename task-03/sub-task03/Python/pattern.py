def print_pattern(rows):
  for i in range(rows):
    for j in range(rows - i):
      print(" ", end="")
    for k in range(2 * i + 1):
      print("*", end="")
    print()

  for i in range(rows - 2, -1, -1):
    for j in range(rows - i):
      print(" ", end="")
    for k in range(2 * i + 1):
      print("*", end="")
    print()

rows = 3
print_pattern(rows)