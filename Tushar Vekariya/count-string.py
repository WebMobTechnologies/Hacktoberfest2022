test_str = input("enter a string :- ")
res = {i : test_str.count(i) for i in set(test_str)}
  
print (str(res))