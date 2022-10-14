mystr = input("enter a string :- ")
list1 = mystr.split(" ")
final_str = list1[::-1]
print(" ".join(final_str))