# this project will generate a random <> character password using the ASCII character table
import random

nums = int(input("How many characters do you want in your password? "))

lst = []

def generate_random_ascii():
  total_range = set(range(35, 123))

  # this combines the unwanted characters from the ASCII table
  excluded_ranges = set(range(58, 65)).union(set(range(91, 97))).union(set(range(37, 48)))

  # makes a list for the allowed characters in the password
  allowed_codes = list(total_range - excluded_ranges)

  # picks a random choice
  return random.choice(allowed_codes)

for i in range(0, nums):
  char = generate_random_ascii()
  lst.append(chr(char))

for j in range(len(lst)):
  print(lst[j],end="")