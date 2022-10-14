# get only repeated value in list
a = [10,20,30,40,20,30,40,0,2,3,5,2]
d = []
for i in a:
    if a.count(i) > 1 and i not in d:
        d.append(i) 
print(d)